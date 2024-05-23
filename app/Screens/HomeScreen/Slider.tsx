import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Heading from '@/app/Components/Heading';



const SliderList = [
    {
        id: 1,
        name: "slider1",
        image: "https://us-east-1-shared-usea1-02.graphassets.com/clw3drxyn0obr08lg6ft2et79/clw5015n28o1107l9l1ncg409"

    },
    {
        id: 2,
        name: "slider2",
        image: "https://us-east-1-shared-usea1-02.graphassets.com/clw3drxyn0obr08lg6ft2et79/clw501vds8nhw07k207zwbw2x"

    },


]


export default function Slider() {

    return (
        <View >
            {/* <Text style={styles.heading}>Offer's for You </Text> */}
            <Heading text={`Offer's for You `} isViewAll={false} />

            <FlatList
                data={SliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item, index }) =>
                (
                    <View style={{ margin: 10 }}>
                        <Image
                            style={styles.sliderimg}
                            source={{ uri: item.image }}
                        />
                    </View>
                )
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({

    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium'
    },
    sliderItem: {
        marginRight: 10,
    },
    sliderimg: {
        width: 270,
        height: 150,
        borderRadius: 20,
    }
});