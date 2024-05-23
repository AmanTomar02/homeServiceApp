import { View, TouchableOpacity, StyleSheet, GestureResponderEvent, Text } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


type BookingModalProps = {
    hideModal: (event?: GestureResponderEvent) => void;
};



export default function BookingModal(this: any, { hideModal }: BookingModalProps) {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    paddingTop: 20,
                }}
                onPress={() => hideModal()} >
                <Ionicons name="arrow-back-outline" size={24} color="black" />
                {/* <Heading text={'Booking'} /> */}

                <Text style={{ fontSize: 25, fontFamily: 'outfit' }}>Booking</Text>

            </TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({
    calendar: {
        // backgroundColor: Colors.PRIMARY_LIGHT,
        // padding: 20,
        // borderRadius: 15,
    },
});