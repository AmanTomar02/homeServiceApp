import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Heading from '@/app/Components/Heading'
import Colors from '@/app/Utils/Colors';
import { useNavigation } from '@react-navigation/native';


const MopImage = require('@/assets/images/mop.png');
const SupportImage = require('@/assets/images/support.png');
const PaintBrushImage = require('@/assets/images/paintbrush.png');
const TruckImage = require('@/assets/images/cargo-truck.png');


const CategoryList = [
    {
        id: 1,
        name: "Cleaning",
        image: MopImage

    },
    {
        id: 2,
        name: "Repairing",
        image: SupportImage

    },
    {
        id: 3,
        name: "Painting",
        image: PaintBrushImage

    },
    {
        id: 4,
        name: "Shifting",
        image: TruckImage

    },


]





export default function Categories() {

    const navigation = useNavigation()

    return (
        <View>
            <Heading text={`Category`} isViewAll={true} />

            <FlatList
                data={CategoryList}
                numColumns={4}
                renderItem={({ item, index }) => {
                    if (index <= 3) {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.push('business-list', {
                                    category: item.name
                                })}
                                style={styles.container}
                            >
                                <View style={styles.iconContainer}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={item.image}
                                    />
                                </View>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99
    },

});