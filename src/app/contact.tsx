import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Bullet, Card, openURL, Screen, SectionTitle, shadow, useTheme } from '@/components/ui';
import { achievements, certifications, profile } from '@/constants/resume';

function ContactRow({
  icon,
  label,
  value,
  onPress,
}: {
  icon: any;
  label: string;
  value: string;
  onPress: () => void;
}) {
  const t = useTheme();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
      <View style={styles.row}>
        <View style={[styles.iconWrap, { backgroundColor: t.accentSoft }]}>
          <Ionicons name={icon} size={18} color={t.accent} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.rowLabel, { color: t.muted }]}>{label}</Text>
          <Text style={[styles.rowValue, { color: t.text }]}>{value}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={t.muted} />
      </View>
    </Pressable>
  );
}

export default function Contact() {
  const t = useTheme();
  return (
    <Screen>
      <SectionTitle icon="mail-outline">Get in Touch</SectionTitle>
      <Card style={{ paddingVertical: 6 }}>
        <ContactRow icon="mail-outline" label="Email" value={profile.email} onPress={() => openURL(`mailto:${profile.email}`)} />
        <View style={[styles.divider, { backgroundColor: t.border }]} />
        <ContactRow icon="call-outline" label="Phone" value={profile.phone} onPress={() => openURL(`tel:${profile.phone.replace(/\s/g, '')}`)} />
        <View style={[styles.divider, { backgroundColor: t.border }]} />
        <ContactRow icon="logo-linkedin" label="LinkedIn" value={profile.linkedinLabel} onPress={() => openURL(profile.linkedin)} />
        <View style={[styles.divider, { backgroundColor: t.border }]} />
        <ContactRow icon="logo-github" label="GitHub" value={profile.githubLabel} onPress={() => openURL(profile.github)} />
      </Card>

      <SectionTitle icon="ribbon-outline">Certifications</SectionTitle>
      <Card>
        {certifications.map((c) => (
          <Bullet key={c}>{c}</Bullet>
        ))}
      </Card>

      <SectionTitle icon="trophy-outline">Achievements</SectionTitle>
      <Card>
        {achievements.map((a) => (
          <Bullet key={a}>{a}</Bullet>
        ))}
      </Card>

      <View style={[styles.footer, shadow]}>
        <Text style={[styles.footerText, { color: t.muted }]}>
          Built with React Native + Expo
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  iconWrap: { width: 38, height: 38, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  rowLabel: { fontSize: 11.5 },
  rowValue: { fontSize: 14.5, fontWeight: '600', marginTop: 1 },
  divider: { height: 1, marginLeft: 50 },
  footer: { alignItems: 'center', marginTop: 20, paddingVertical: 14 },
  footerText: { fontSize: 12.5 },
});
