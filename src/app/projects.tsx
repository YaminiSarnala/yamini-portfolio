import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Card, Screen, SectionTitle, Tag, useTheme } from '@/components/ui';
import { projects } from '@/constants/resume';

export default function Projects() {
  const t = useTheme();
  return (
    <Screen>
      <SectionTitle icon="cube-outline">Key Projects</SectionTitle>
      {projects.map((p) => (
        <Card key={p.name}>
          <Text style={[styles.name, { color: t.text }]}>{p.name}</Text>
          <Text style={[styles.role, { color: t.accent }]}>{p.role}</Text>
          <Text style={[styles.blurb, { color: t.muted }]}>{p.blurb}</Text>

          <Text style={[styles.label, { color: t.muted }]}>TECH STACK</Text>
          <View style={styles.tags}>
            {p.tech.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </View>

          <Text style={[styles.label, { color: t.muted }]}>FEATURES</Text>
          {p.features.map((f) => (
            <View key={f} style={styles.featureRow}>
              <Ionicons name="checkmark-circle" size={16} color={t.accent} />
              <Text style={[styles.feature, { color: t.text }]}>{f}</Text>
            </View>
          ))}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  name: { fontSize: 19, fontWeight: '800' },
  role: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  blurb: { fontSize: 14, lineHeight: 21, marginTop: 10 },
  label: { fontSize: 11, fontWeight: '700', letterSpacing: 1, marginTop: 16, marginBottom: 8 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 7 },
  feature: { fontSize: 14 },
});
