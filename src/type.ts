
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    homeNavi: undefined;
    'business-list': { category: string };  // Define parameters if needed
    'business-detail': { businessId: string };  // Define parameters if needed

};


export type BusinessListByCategoryRouteProp = RouteProp<RootStackParamList, 'business-list'>;

 