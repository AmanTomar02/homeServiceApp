import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Business_List } from '../HomeScreen/BusinessList';
import BusinessListItem from './BusinessListItem';
import Colors from '@/app/Utils/Colors';

type Props = {
  route: { params: { category: string } };
};

export default function BusinessListByCategory({ route }: Props) {

  const [businessList, setBusinessList] = useState<any[]>([])


  const { category } = route.params;
  const navigation = useNavigation()


  useEffect(() => {
    const filteredBusinesses = Business_List.filter(business => business.CategoryName === category);
    setBusinessList(filteredBusinesses);
  }, [category])

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.touchbleOp}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{category}</Text>
      </TouchableOpacity>

      {
        businessList?.length > 0 ? <FlatList
          data={businessList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item} />
          )}
        /> :
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 30,
            marginTop: '20%',
            textAlign: 'center',
            color: Colors.GRAY
          }}>No Services Found</Text>

      }


    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30
  },
  touchbleOp: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  }
})