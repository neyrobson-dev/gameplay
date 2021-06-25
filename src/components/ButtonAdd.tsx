import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../global/styles/theme';

export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 49,
        height: 49,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});