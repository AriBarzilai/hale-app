import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinkButton from '../components/LinkButton';

function HomeScreen() {
    return (
        <View>
            <View className=" top-1/4 items-center">
                <Text className="text-bold text-3xl">Hale</Text>
                <Text className="text-2l">Example Survey App (Prototype)</Text>
            </View>
            <View className=" top-1/2 items-center">
                <Image className="w-1/2 h-1/2" source={require('../../assets/icon.png')} />
            </View>
            <View className="top-2/3 items-center">
                <LinkButton className=" bottom-1/4" text="Begin Survey" src={useRoute().name} type="increment" />
            </View>
        </View>
    );
};
export default HomeScreen;