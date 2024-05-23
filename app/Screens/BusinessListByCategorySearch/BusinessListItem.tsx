import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/app/Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type BusinessListItemProps = {
    business: {
        address: string;
        id: number;
        name: string;
        contactPerson: string;
        email: string;
        CategoryName: string;
        image: any;
    };
};



export default function BusinessListItem({ business }: BusinessListItemProps) {

    const navigation = useNavigation()



    return (
        <TouchableOpacity
            onPress={() => navigation.push('business-detail', { business })}
            // onPress={goToBusinessDetail}
            style={styles.container}
            accessibilityLabel={`${business.name} details`}
        >

            <Image
                style={styles.img}
                source={business.image}
            />
            <View style={styles.subcontainer}>
                <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 15 }}>{business.contactPerson}</Text>

                <Text style={{ fontFamily: 'outfit-bold', fontSize: 19 }}>{business.name}</Text>

                <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16 }}>
                    <Ionicons name="location-sharp" size={24} color={Colors.PRIMARY} style={{ marginRight: 10 }} />
                    {business.address}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    subcontainer: {
        display: "flex",
        gap: 8,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 15
    }


})