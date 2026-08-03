/**
 * Small design-system for the portfolio: theme + reusable building blocks.
 */
import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const palette = {
  light: {
    bg: '#F7F8FC',
    card: '#FFFFFF',
    text: '#1B1B2F',
    muted: '#5E6172',
    accent: '#059669',
    accentSoft: '#E3F5EC',
    border: '#E4ECE8',
    heroFrom: '#047857',
    heroTo: '#10B981',
    onHero: '#FFFFFF',
  },
  dark: {
    bg: '#0C0D1A',
    card: '#171827',
    text: '#ECEDF7',
    muted: '#9C9FB5',
    accent: '#818CF8',
    accentSoft: '#1E1F3A',
    border: '#282A44',
    heroFrom: '#4F46E5',
    heroTo: '#6366F1',
    onHero: '#FFFFFF',
  },
};

export type Theme = typeof palette.light;

export function useTheme(): Theme {
  // Always use the light theme for a clean, consistent portfolio look
  // (ignore the device's dark mode).
  return palette.light;
}

export const MAX_WIDTH = 760;

export function Screen({ children }: { children: ReactNode }) {
  const t = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.bg }} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export function SectionTitle({ icon, children }: { icon?: any; children: ReactNode }) {
  const t = useTheme();
  return (
    <View style={styles.sectionTitleRow}>
      {icon ? <Ionicons name={icon} size={18} color={t.accent} /> : null}
      <Text style={[styles.sectionTitle, { color: t.text }]}>{children}</Text>
    </View>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: any }) {
  const t = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: t.card, borderColor: t.border }, style]}>
      {children}
    </View>
  );
}

export function Tag({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View style={[styles.tag, { backgroundColor: t.accentSoft }]}>
      <Text style={[styles.tagText, { color: t.accent }]}>{label}</Text>
    </View>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  const t = useTheme();
  return (
    <View style={styles.bulletRow}>
      <View style={[styles.dot, { backgroundColor: t.accent }]} />
      <Text style={[styles.bulletText, { color: t.muted }]}>{children}</Text>
    </View>
  );
}

export function LinkButton({
  icon,
  label,
  onPress,
  primary,
}: {
  icon: any;
  label: string;
  onPress: () => void;
  primary?: boolean;
}) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.linkBtn,
        {
          backgroundColor: primary ? t.accent : t.card,
          borderColor: primary ? t.accent : t.border,
          opacity: pressed ? 0.75 : 1,
        },
      ]}>
      <Ionicons name={icon} size={18} color={primary ? '#fff' : t.accent} />
      <Text style={[styles.linkBtnText, { color: primary ? '#fff' : t.text }]}>{label}</Text>
    </Pressable>
  );
}

export function openURL(url: string) {
  Linking.openURL(url).catch(() => {});
}

export const shadow = Platform.select({
  web: { boxShadow: '0 2px 12px rgba(20,30,50,0.06)' } as any,
  default: {
    shadowColor: '#1A2230',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
});

const styles = StyleSheet.create({
  scroll: { alignItems: 'center', paddingBottom: 40 },
  inner: { width: '100%', maxWidth: MAX_WIDTH, paddingHorizontal: 18 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 22, marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '700', letterSpacing: 0.2 },
  card: { borderRadius: 16, borderWidth: 1, padding: 18, marginBottom: 14, ...(shadow as object) },
  tag: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999 },
  tagText: { fontSize: 12.5, fontWeight: '600' },
  bulletRow: { flexDirection: 'row', gap: 10, marginBottom: 8, alignItems: 'flex-start' },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 7 },
  bulletText: { flex: 1, fontSize: 14, lineHeight: 20 },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  linkBtnText: { fontSize: 14, fontWeight: '600' },
});
