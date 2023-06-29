import { View } from 'react-native';
import LinkButton from './LinkButton';
import BackIcon from '../../assets/back-button.png';
import { PageIndicator } from 'react-native-page-indicator';
import { PAGES_LENGTH } from '../../App';
import { useRoute } from '@react-navigation/native';

/**
 * A header component for a survey, to be used inside a <SurveyPage> component.
 * Contains a back button which exits the survey, and a page indicator.
 * 
 * @returns the header of the survey
 */
const Header = () => {
    return (
        <View className=" top-0 pt-6 pb-2 w-screen justify-start items-center flex-row">
            <LinkButton
                img={BackIcon}
                src="0"
            />

            <View className=" w-5/6">
                <PageIndicator size={8} count={PAGES_LENGTH - 2} current={parseInt(useRoute().name) - 1} />
            </View>
        </View>
    );
}

export default Header;