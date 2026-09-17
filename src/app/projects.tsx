import { Ionicons } from '@expo/vector-icons';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { Card, openURL, Screen, SectionTitle, Tag, useTheme } from '@/components/ui';
import { projects, type Project } from '@/constants/resume';

type StoreLink = { url: string; label: string; icon: 'logo-apple' | 'logo-google-playstore' };

/**
 * Pick the store link that matches the viewer's device.
 *
 * An iPhone user sent to Google Play cannot install anything, so iOS prefers the
 * App Store and everything else prefers Play. Not every app ships on both
 * platforms, so each falls back to the other rather than showing no link at all —
 * and because the label is derived from the URL that's actually opened, the
 * button can never say "Google Play" while opening the App Store.
 */
function getStoreLink(project: Project): StoreLink | null {
  const apple: StoreLink | null = project.appStoreUrl
    ? { url: project.appStoreUrl, label: 'View on the App Store', icon: 'logo-apple' }
    : null;

  const google: StoreLink | null = project.playStoreUrl
    ? { url: project.playStoreUrl, label: 'View on Google Play', icon: 'logo-google-playstore' }
    : null;

  return Platform.OS === 'ios' ? (apple ?? google) : (google ?? apple);
}

function ProjectCard({ project }: { project: Project }) {
  const t = useTheme();
  const store = getStoreLink(project);

  // On an iPhone, an app that has only shipped on Android. Saying so reads
  // better on a portfolio than a bare Google Play button an iOS visitor
  // cannot install from — and it signals the iOS build is in progress.
  const iosPending =
    Platform.OS === 'ios' && !project.appStoreUrl && !!project.playStoreUrl;

  const body = (
    <>
      <View style={styles.titleRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.name, { color: t.text }]}>{project.name}</Text>
          <Text style={[styles.role, { color: t.accent }]}>{project.role}</Text>
        </View>
        {store ? <Ionicons name="open-outline" size={18} color={t.muted} /> : null}
      </View>

      <Text style={[styles.blurb, { color: t.muted }]}>{project.blurb}</Text>

      <Text style={[styles.label, { color: t.muted }]}>TECH STACK</Text>
      <View style={styles.tags}>
        {project.tech.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </View>

      <Text style={[styles.label, { color: t.muted }]}>FEATURES</Text>
      {project.features.map((f) => (
        <View key={f} style={styles.featureRow}>
          <Ionicons name="checkmark-circle" size={16} color={t.accent} />
          <Text style={[styles.feature, { color: t.text }]}>{f}</Text>
        </View>
      ))}

      {iosPending ? (
        <View style={[styles.comingSoon, { backgroundColor: t.accentSoft }]}>
          <Ionicons name="logo-apple" size={14} color={t.accent} />
          <Text style={[styles.comingSoonText, { color: t.accent }]}>
            iOS version coming soon
          </Text>
        </View>
      ) : null}

      {store ? (
        <View
          style={[
            styles.storeBtn,
            iosPending
              ? { backgroundColor: 'transparent', borderWidth: 1, borderColor: t.border }
              : { backgroundColor: t.accent },
          ]}>
          <Ionicons name={store.icon} size={16} color={iosPending ? t.muted : '#fff'} />
          <Text style={[styles.storeBtnText, iosPending && { color: t.muted }]}>
            {store.label}
          </Text>
        </View>
      ) : null}
    </>
  );

  if (!store) {
    return <Card>{body}</Card>;
  }

  return (
    <Pressable
      onPress={() => openURL(store.url)}
      accessibilityRole="link"
      accessibilityLabel={`${project.name} — ${store.label}`}
      style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}>
      <Card>{body}</Card>
    </Pressable>
  );
}

export default function Projects() {
  return (
    <Screen>
      <SectionTitle icon="cube-outline">Key Projects</SectionTitle>
      {projects.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  name: { fontSize: 19, fontWeight: '800' },
  role: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  blurb: { fontSize: 14, lineHeight: 21, marginTop: 10 },
  label: { fontSize: 11, fontWeight: '700', letterSpacing: 1, marginTop: 16, marginBottom: 8 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 7 },
  feature: { fontSize: 14 },
  storeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
    paddingVertical: 11,
    borderRadius: 12,
  },
  storeBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  comingSoon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  comingSoonText: { fontSize: 12.5, fontWeight: '700' },
});
