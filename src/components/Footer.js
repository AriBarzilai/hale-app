import { View } from 'react-native';
import LinkButton from './LinkButton';
import { useRoute } from '@react-navigation/native';
import { PAGES_LENGTH } from '../../App';

/**
 * A footer component for a survey, to be used inside a <SurveyPage> component.
 * Contains navigation buttons which change depending on which page of the survey the user is on.
 * (Previous button is hidden on the first page, Next Page button is replaced by Submit on the last page)
 * 
 * @returns the footer of the survey
 */
const Footer = () => {
    const showPreviousButton = useRoute().name !== "1";
    const showSubmitButton = useRoute().name < PAGES_LENGTH - 2;
    const nextButtonText = showSubmitButton ? "Next" : "Submit";

    return (
        <View className="mt-auto py-5 w-screen justify-center items-center flex-row">
            {showPreviousButton && <LinkButton text="Previous" src={useRoute().name} type="decrement" />}
            <LinkButton text={nextButtonText} src={useRoute().name} type="increment" />
        </View>
    );
}

export default Footer;