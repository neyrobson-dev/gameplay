import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../global/styles/theme';

type Props = {
    urlImage: string
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
            <Image
                source={{ uri: urlImage }} 
                style={styles.avatar}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 49,
        height: 49,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 8,

    }
})