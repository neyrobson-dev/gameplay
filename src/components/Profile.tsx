import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Avatar } from './Avatar';

import { theme } from '../global/styles/theme';

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/neyrobson-eng.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.username}>Ney Robson</Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
    }
})