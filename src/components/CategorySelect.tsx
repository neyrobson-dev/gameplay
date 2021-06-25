import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { categories } from '../utils/categories';

import { theme } from '../global/styles/theme';

import { Category } from './Category';

type Props = {
    categorySelected?: string;
}

export function CategorySelect({ categorySelected }: Props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});