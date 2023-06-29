import SurveyPage from '../components/SurveyPage';
import Question from '../components/Question';
import Button from '../components/Button';
import Slider from '../components/Slider';

function SurveyScreen1() {
    return (
        <SurveyPage title="Pain">

            <Question text="How much pain do you feel?">
                <Slider />
            </Question>

            <Question text="Pain type" type="grid">
                <Button text="Sharp" />
                <Button text="Cramping" />
                <Button text="Pulling" />
                <Button text="Stabbing" />
                <Button text="Aching" />
                <Button text="Pulsating" />
            </Question>

            <Question text="Pain type" type="grid">
                <Button text="Vulva" />
                <Button text="Ovaries" />
                <Button text="Lower back" />
                <Button text="Womb" />
                <Button text="Leg" />
                <Button text="Hip" />
            </Question>

            <Question text="What are the triggers" type="row">
                <Button text="Stress" />
                <Button text="Exercise" />
                <Button text="Lack of sleep" />
                <Button text="Other" />
            </Question>

            <Question text="Associated factors" type="row">
                <Button text="Diet" />
                <Button text="Age" />
                <Button text="Weather" />
                <Button text="Money" />
                <Button text="Other" />
            </Question>
        </SurveyPage>
    );
};
export default SurveyScreen1;