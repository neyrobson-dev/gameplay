import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    StyleSheet
} from 'react-native';
import { theme } from '../global/styles/theme';

type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            { children }
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});