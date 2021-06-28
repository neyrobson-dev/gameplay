import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Avatar } from './Avatar';

import { theme } from '../global/styles/theme';

export function ListHeader() {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})