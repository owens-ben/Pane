import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Keeps a screen clear of what the system draws down a side of the display: the iPhone Duo's
 * status column (time, Wi-Fi and the Control Center ring at the top right, folded and unfolded,
 * which also takes the taps on anything under it) and the sensor housing of a phone on its side.
 * The stack wraps every screen in it, so a screen pads only its top and bottom itself. The page
 * color behind the screen fills the strip left clear.
 */
export function SafeAreaSides({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();
  return <View style={[styles.fill, { paddingLeft: insets.left, paddingRight: insets.right }]}>{children}</View>;
}

/**
 * For a bar or panel with its own background inside `SafeAreaSides`: the background runs to the
 * screen's edges while what it holds stays clear of them. `padding` is the side padding it has anyway.
 */
export function useBleedSides(padding = 0): ViewStyle {
  const insets = useSafeAreaInsets();
  return { marginLeft: -insets.left, marginRight: -insets.right, paddingLeft: insets.left + padding, paddingRight: insets.right + padding };
}

const styles = StyleSheet.create({ fill: { flex: 1 } });
