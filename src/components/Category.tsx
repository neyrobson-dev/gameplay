import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = true,
    ...rest
}: Props) {
    return (
        <RectButton { ...rest }>
            <LinearGradient
                style={styles.container}
                colors={[theme.colors.secondary50, theme.colors.secondary70]}
            >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View
                        style={checked ? styles.checked : styles.unchecked} 
                    />

                    <Icon
                        width={48}
                        height={48} 
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,      
        borderRadius: 3
    },
    unchecked: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    }
});