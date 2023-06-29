import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinkButton from '../components/LinkButton';

function EndScreen() {
    return (
        <View>
            <View className=" top-1/4 items-center">
                <Text className="text-bold text-2xl">Thank you!</Text>
                <Text className="text-xl">Your survey has been submitted.</Text>
                <Text className=" text-xs">(Not really, this was just a demo)</Text>
            </View>
            <View className=" top-1/2 items-center">
                <Image className="w-1/2 h-1/2" source={require('../../assets/icon.png')} />
            </View>
            <View className="top-2/3 items-center">
                <LinkButton className=" bottom-1/4" text="Retake Survey" src={"0"} type="increment" />
            </View>
        </View>
    );
};
export default EndScreen;