import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Card, Screen, SectionTitle, Tag, useTheme } from '@/components/ui';
import { skills } from '@/constants/resume';

export default function Skills() {
  const t = useTheme();
  return (
    <Screen>
      <SectionTitle icon="rocket-outline">Skills & Abilities</SectionTitle>
      {skills.map((group) => (
        <Card key={group.category}>
          <View style={styles.header}>
            <Ionicons name={group.icon as any} size={18} color={t.accent} />
            <Text style={[styles.category, { color: t.text }]}>{group.category}</Text>
          </View>
          <View style={styles.tags}>
            {group.items.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  category: { fontSize: 15.5, fontWeight: '700' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
