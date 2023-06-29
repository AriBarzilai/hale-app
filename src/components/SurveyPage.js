import { Text, View } from 'react-native';
import Footer from './Footer';
import Header from './Header';

/**
 * A general page wrapper-component for a survey.
 * 
 * @param title Large text to be displayed at the top of the page; the title of the page
 * @param children Elements in the survey; intended to be composed of <Question> components
 * 
 * @returns the page wrapper
 */
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