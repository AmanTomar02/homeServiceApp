import { View, Image, StyleSheet, Text, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '@/app/Utils/Colors';
import Heading from '@/app/Components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BookingModal from './BookingModal';


export default function BusinessDetailsScreen({ }) {

  const { business }: any = useRoute().params || {};
  const navigation = useNavigation();
  const [isReadMore, setIsReadMore] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return business && (
    <View>
      <ScrollView style={{ height: '91%' }}>
        <TouchableOpacity style={styles.backBtncontainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="yellow" />
        </TouchableOpacity>

        <Image
          source={business.image}
          style={{ width: '100%', height: 300 }}
        />


        {/*  info container*/}
        <View style={{
          padding: 20, display: 'flex', gap: 7
        }} >

          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>{business?.name}</Text>

          {/*  sub conatiner*/}
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center'
          }}  >
            <Text style={{ fontFamily: "outfit-medium", color: Colors.PRIMARY, fontSize: 20 }}>{business?.contactPerson} 🌟</Text>


            <Text style={{ color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT, padding: 5, borderRadius: 5, fontSize: 14 }}>{business?.CategoryName}</Text>
          </View>

          <Text style={{ fontSize: 17, fontFamily: "outfit", color: Colors.GRAY }}>
            <Ionicons name="location-sharp" size={25} color={Colors.PRIMARY} style={{ marginRight: 10 }} />
            {business?.address}</Text>

          {/* Horizontal line */}
          <View style={{ borderWidth: 0.4, borderColor: Colors.GRAY, marginTop: 20, marginBottom: 20 }}></View>

          {/* About me Section */}

          <View>
            <Heading text={'About Me'} />
            <Text style={{ fontFamily: 'outfit', lineHeight: 28, color: Colors.GRAY, fontSize: 16 }} numberOfLines={isReadMore ? 20 : 5}>{business.about}</Text>

            <TouchableOpacity
              onPress={() => setIsReadMore(!isReadMore)}
            >
              <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily: "outfit" }}>
                {isReadMore ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal line */}
          <View style={{ borderWidth: 0.4, borderColor: Colors.GRAY, marginTop: 20, marginBottom: 20 }}></View>

          <BusinessPhotos business={business} />

        </View>
      </ScrollView >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 5,
          gap: 5
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 99,

          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'outfit-medium',
              color: Colors.PRIMARY,
              fontSize: 18,
            }}
          >Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 99,


          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'outfit-medium',
              color: Colors.WHITE,
              fontSize: 18
            }}
          >Book Now</Text>
        </TouchableOpacity>


      </View>
      {/* booking screen modal */}
      <Modal
        animationType="slide"
        visible={showModal}
      >
        <BookingModal hideModal={() => setShowModal(false)} />
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  backBtncontainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 20
  }
})