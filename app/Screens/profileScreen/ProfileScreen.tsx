import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/app/Utils/Colors';




export default function ProfileScreen() {

  const { user } = useUser()


  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark-sharp'
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'log-out'
    },
    {
      id: 4,
      name: 'gmail',
      icon: 'mail'
    },

  ]

  return (
    <View>
      <View style={{ backgroundColor: Colors.PRIMARY, padding: 20, paddingTop: 30 }}>

        <Text style={{ fontSize: 30, color: "white", fontFamily: "outfit-bold", }}>Profile</Text>

        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,


        }}>
          <Image
            style={{ width: 90, height: 90, borderRadius: 99 }}
            source={{ uri: user?.imageUrl }}
          />
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-medium',
            color: 'white',
            marginTop: 8
          }}>{user?.fullName}</Text>

          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-medium',
            color: 'white',
            marginTop: 8
          }}>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>

      </View>


      <View>
        <View style={{ justifyContent: 'center', alignItems: "center", paddingTop: 100 }}>
          <FlatList
            data={profileMenu}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: 'center',
                paddingHorizontal: 80,
                marginBottom: 40,
                gap: 10
              }}>
                <Ionicons name={item.icon} size={24} color={Colors.PRIMARY} />
                <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 20,


                }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

      </View>


    </View>
  )
}