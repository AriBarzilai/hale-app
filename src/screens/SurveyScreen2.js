import SurveyPage from '../components/SurveyPage';
import Question from '../components/Question';
import Button from '../components/Button';
import Slider from '../components/Slider';

function SurveyScreen2() {
    return (
        <SurveyPage title="Lifestyle Factors">

            <Question text="How would you rate your overall physical activity level?" type="row">
                <Button text="Sedentary" />
                <Button text="Low" />
                <Button text="Moderate" />
                <Button text="High" />
            </Question>

            <Question text="Are you currently following any specific dietary restrictions or guidelines?" type="row">
                <Button text="Gluten-free" />
                <Button text="Dairy-free" />
                <Button text="Vegan" />
                <Button text="Other" />
            </Question>

            <Question text="Do you engage in any stress management techniques?" type="row">
                <Button text="Meditation" />
                <Button text="Yoga" />
                <Button text="Breathing exercises" />
                <Button text="Other" />
            </Question>

            <Question text="How many hours of sleep do you typically get per night?" type="grid">
                <Button text="Less than 5 hours" />
                <Button text="5-7 hours" />
                <Button text="7-9 hours" />
                <Button text="More than 9 hours" />
            </Question>
        </SurveyPage>
    );
};
export default SurveyScreen2;