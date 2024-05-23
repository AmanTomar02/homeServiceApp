import { View, Text, FlatList, ViewBase, Image } from 'react-native'
import React from 'react'
import Heading from '@/app/Components/Heading'
import BusinessListItemSmall from './BusinessListItemSmall'

const HouseCleaning = require('@/assets/images/cleaning.webp');
const WashingCloths = require('@/assets/images/washing.jpeg');
const HouseRepairing = require('@/assets/images/house_repairing.webp');
const BathroomCleaning = require('@/assets/images/bathroom-cleaning.webp');


export const Business_List = [
    {
        id: 1,
        name: "House Cleaning",
        contactPerson: 'Maverick dek',
        email: 'HouseCleaning@gmail.com',
        CategoryName: 'Cleaning',
        address: 'Suite Spring, Port Dorethea',
        about: `"Hi there! I'm Maverick dek, your reliable home cleaning expert! With years of experience, I offer top-notch cleaning services tailored to your needs. From regular maintenance to deep cleaning, I ensure your home is spotless and sparkling. Let me take care of the mess while you focus on what matters most!"`,
        image: HouseCleaning
    },
    {
        id: 2,
        name: "Cloths Washing",
        contactPerson: 'Wilder jhon',
        email: 'WashingCloths@gmail.com',
        CategoryName: 'Cleaning',
        address: 'Dare Hill, New Elroy',
        about: `"Hi there! I'm Wilder jhon, your reliable home cleaning expert! With years of experience, I offer top-notch cleaning services tailored to your needs. From regular maintenance to deep cleaning, I ensure your home is spotless and sparkling. Let me take care of the mess while you focus on what matters most!"`,
        image: WashingCloths

    },
    {
        id: 3,
        name: "House Repairing",
        contactPerson: 'Lincoln stak',
        email: 'HouseRepairing@gmail.com',
        CategoryName: 'Repairing',
        address: 'Ankunding Bypass',
        about: `"Hi there! I'm Lincoln stak, your reliable home cleaning expert! With years of experience, I offer top-notch cleaning services tailored to your needs. From regular maintenance to deep cleaning, I ensure your home is spotless and sparkling. Let me take care of the mess while you focus on what matters most!"`,
        image: HouseRepairing

    },
    {
        id: 4,
        name: "Bathroom Cleaning",
        contactPerson: 'Whalter white',
        email: 'BathroomCleaningg@gmail.com',
        CategoryName: 'Cleaning',
        address: 'Mariann Bypass',
        about: `"Hi there! I'm Whalter white, your reliable home cleaning expert! With years of experience, I offer top-notch cleaning services tailored to your needs. From regular maintenance to deep cleaning, I ensure your home is spotless and sparkling. Let me take care of the mess while you focus on what matters most!"`,
        image: BathroomCleaning

    },



]

export default function BusinessList() {
    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={`Latest Business`} isViewAll={false} />

            <FlatList
                data={Business_List}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (

                    <View style={{ marginRight: 10 }}>
                        <BusinessListItemSmall buiness={item} />
                    </View>
                )}
            />
        </View>
    )
}