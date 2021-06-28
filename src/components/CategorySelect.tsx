import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { categories } from '../utils/categories';

import { theme } from '../global/styles/theme';

import { Category } from './Category';

type Props = {
    categorySelected?: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
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
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 120,
        paddingLeft: 24
    },
});