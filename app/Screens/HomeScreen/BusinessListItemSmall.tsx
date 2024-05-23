import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/app/Utils/Colors'

export default function BusinessListItemSmall({ buiness }: any) {
    return (
        <View style={styles.container}>
            <Image
                source={buiness.image}
                style={styles.img}
            />
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 17, fontFamily: 'outfit-medium' }}>{buiness.name}</Text>

                <Text style={{ fontSize: 13, fontFamily: 'outfit' }}>{buiness.contactPerson}</Text>

                <Text style={{
                    fontSize: 10,
                    fontFamily: 'outfit-medium',
                    padding: 4,
                    color: Colors.PRIMARY,
                    backgroundColor: Colors.PRIMARY_LIGHT,
                    borderRadius: 4,
                    alignSelf: "flex-start",
                    paddingHorizontal: 7

                }}>{buiness.CategoryName}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10
    },
    infoContainer: {
        padding: 7,
        display: "flex",
        gap: 3

    },
    img: {
        width: 160,
        height: 100,
        borderRadius: 10
    },

})