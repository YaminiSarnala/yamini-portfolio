import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card, openURL, Screen, SectionTitle, Tag, useTheme } from '@/components/ui';
import { projects, type Project } from '@/constants/resume';

function ProjectCard({ project }: { project: Project }) {
  const t = useTheme();
  const storeUrl = project.playStoreUrl;

  const body = (
    <>
      <View style={styles.titleRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.name, { color: t.text }]}>{project.name}</Text>
          <Text style={[styles.role, { color: t.accent }]}>{project.role}</Text>
        </View>
        {storeUrl ? <Ionicons name="open-outline" size={18} color={t.muted} /> : null}
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

      {storeUrl ? (
        <View style={[styles.storeBtn, { backgroundColor: t.accent }]}>
          <Ionicons name="logo-google-playstore" size={16} color="#fff" />
          <Text style={styles.storeBtnText}>View on Google Play</Text>
        </View>
      ) : null}
    </>
  );

  // Projects with a public listing open the Play Store; the rest stay static.
  if (!storeUrl) {
    return <Card>{body}</Card>;
  }

  return (
    <Pressable
      onPress={() => openURL(storeUrl)}
      accessibilityRole="link"
      accessibilityLabel={`${project.name} — open on Google Play`}
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
    marginTop: 16,
    paddingVertical: 11,
    borderRadius: 12,
  },
  storeBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
});
