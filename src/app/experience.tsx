import { StyleSheet, Text, View } from 'react-native';

import { Bullet, Card, Screen, SectionTitle, useTheme } from '@/components/ui';
import { experience } from '@/constants/resume';

export default function ExperienceScreen() {
  const t = useTheme();
  return (
    <Screen>
      <SectionTitle icon="briefcase-outline">Experience</SectionTitle>
      {experience.map((job) => (
        <Card key={`${job.company}-${job.period}`}>
          <View style={styles.topRow}>
            <Text style={[styles.role, { color: t.text }]}>{job.role}</Text>
            <View style={[styles.periodPill, { backgroundColor: t.accentSoft }]}>
              <Text style={[styles.period, { color: t.accent }]}>{job.period}</Text>
            </View>
          </View>
          <Text style={[styles.company, { color: t.accent }]}>{job.company}</Text>
          <Text style={[styles.summary, { color: t.muted }]}>{job.summary}</Text>
          <View style={{ height: 6 }} />
          {job.points.map((p, i) => (
            <Bullet key={i}>{p}</Bullet>
          ))}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 },
  role: { fontSize: 16, fontWeight: '700', flex: 1 },
  periodPill: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 999 },
  period: { fontSize: 11.5, fontWeight: '600' },
  company: { fontSize: 14, fontWeight: '600', marginTop: 3 },
  summary: { fontSize: 13.5, lineHeight: 20, marginTop: 8 },
});
