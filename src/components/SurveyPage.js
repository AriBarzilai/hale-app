import { Text, View } from 'react-native';
import Footer from './Footer';
import Header from './Header';

const SurveyPage = ({ title, children }) => {

    return (
        <View className="w-screen h-screen flex-col justify-center items-center">
            <Header />
            <Text className="w-3/4 text-3xl font-bold mb-4">{title}</Text>
            <View className="flex-grow">{children}</View>
            <Footer />
        </View>
    );
}

export default SurveyPage;