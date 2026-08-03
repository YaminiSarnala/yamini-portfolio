import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import {
  Bullet,
  Card,
  LinkButton,
  openURL,
  Screen,
  SectionTitle,
  shadow,
  useTheme,
} from '@/components/ui';
import { education, highlights, profile } from '@/constants/resume';

export default function About() {
  const t = useTheme();

  return (
    <Screen>
      {/* Hero */}
      <LinearGradient
        colors={[t.heroFrom, t.heroTo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, shadow]}>
        <View style={[styles.avatar, { borderColor: t.onHero }]}>
          <Text style={styles.avatarText}>{profile.initials}</Text>
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={14} color="#fff" />
          <Text style={styles.meta}>{profile.location}</Text>
          <Text style={styles.dotSep}>•</Text>
          <Ionicons name="time-outline" size={14} color="#fff" />
          <Text style={styles.meta}>{profile.experienceYears} yrs</Text>
        </View>
      </LinearGradient>

      {/* Highlights */}
      <View style={styles.statsRow}>
        {highlights.map((h) => (
          <Card key={h.label} style={styles.stat}>
            <Text style={[styles.statValue, { color: t.accent }]}>{h.value}</Text>
            <Text style={[styles.statLabel, { color: t.muted }]}>{h.label}</Text>
          </Card>
        ))}
      </View>

      {/* Quick actions */}
      <View style={styles.actions}>
        <LinkButton icon="logo-linkedin" label="LinkedIn" primary onPress={() => openURL(profile.linkedin)} />
        <LinkButton icon="mail-outline" label="Email" onPress={() => openURL(`mailto:${profile.email}`)} />
      </View>

      {/* Summary */}
      <SectionTitle icon="sparkles-outline">About Me</SectionTitle>
      <Card>
        <Text style={[styles.summary, { color: t.muted }]}>{profile.summary}</Text>
      </Card>

      {/* Education */}
      <SectionTitle icon="school-outline">Education</SectionTitle>
      {education.map((e) => (
        <Card key={e.degree}>
          <Text style={[styles.eduDegree, { color: t.text }]}>{e.degree}</Text>
          <Text style={[styles.eduInst, { color: t.muted }]}>{e.institution}</Text>
          <View style={styles.eduMetaRow}>
            <Text style={[styles.eduMeta, { color: t.muted }]}>{e.period}</Text>
            <Text style={[styles.eduScore, { color: t.accent }]}>{e.score}</Text>
          </View>
        </Card>
      ))}

      {/* Career snapshot */}
      <SectionTitle icon="star-outline">At a Glance</SectionTitle>
      <Card>
        <Bullet>Mobile-first engineer focused on React Native & Expo.</Bullet>
        <Bullet>Back-end experience with Java, Spring Boot & MySQL.</Bullet>
        <Bullet>Shipped features for AI-driven and CRM platforms.</Bullet>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 18,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { color: '#fff', fontSize: 30, fontWeight: '800', letterSpacing: 1 },
  name: { color: '#fff', fontSize: 24, fontWeight: '800' },
  title: { color: 'rgba(255,255,255,0.9)', fontSize: 15, fontWeight: '600', marginTop: 2 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10 },
  meta: { color: '#fff', fontSize: 13 },
  dotSep: { color: 'rgba(255,255,255,0.7)', marginHorizontal: 4 },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 4 },
  stat: { flex: 1, alignItems: 'center', paddingVertical: 16 },
  statValue: { fontSize: 22, fontWeight: '800' },
  statLabel: { fontSize: 11.5, marginTop: 3, textAlign: 'center' },
  actions: { flexDirection: 'row', gap: 10, marginTop: 6 },
  summary: { fontSize: 14.5, lineHeight: 22 },
  eduDegree: { fontSize: 15, fontWeight: '700' },
  eduInst: { fontSize: 13, marginTop: 3 },
  eduMetaRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  eduMeta: { fontSize: 12.5 },
  eduScore: { fontSize: 12.5, fontWeight: '700' },
});
