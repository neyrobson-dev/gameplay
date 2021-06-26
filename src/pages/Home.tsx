import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
    View,
    StyleSheet,
} from 'react-native';

import { Profile } from '../components/Profile';
import { ButtonAdd } from '../components/ButtonAdd';
import { CategorySelect } from '../components/CategorySelect';

export function Home() {
    const [category, setCategory ] = useState('');

    function handleCategorySelecr(categoryId: string) {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View style={styles.content}>
                <CategorySelect
                    categorySelected={category}
                    setCategory={setCategory}
                />
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    content: {
        width: '100%',
    }
})