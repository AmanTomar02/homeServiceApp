import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '@/app/Components/Heading'
import Colors from '@/app/Utils/Colors'

export default function BusinessPhotos({ business }: any) {
    return (
        <View>
            <Heading text={'Photos'} />
            <Text style={{ color: Colors.GRAY }}>Not Available Yet</Text>
        </View>
    )
}



const styles = StyleSheet.create({

})