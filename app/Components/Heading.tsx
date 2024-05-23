import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type HeadingProps = {
    text: string;
    isViewAll?: boolean;

}

export default function Heading({ text, isViewAll = false }: HeadingProps) {
    return (
        <View style={styles.contianer}>

            <Text style={styles.heading}>{text} </Text>
            {
                isViewAll && <Text>View all</Text>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium'
    },

});