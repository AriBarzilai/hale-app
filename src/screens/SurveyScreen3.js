import SurveyPage from '../components/SurveyPage';
import Question from '../components/Question';
import Button from '../components/Button';
import Slider from '../components/Slider';

function SurveyScreen3() {
    return (
        <SurveyPage title="Emotional Well-being">

            <Question text="How would you rate your overall mood and emotional well-being?">
                <Slider />
            </Question>

            <Question text="Have you experienced any symptoms of anxiety?" type="row">
                <Button text="Restlessness" />
                <Button text="Worry" />
                <Button text="Fatigue" />
                <Button text="Other" />
            </Question>

            <Question text="Have you experienced any symptoms of depression?" type="grid">
                <Button text="Persistent sadness" />
                <Button text="Loss of interest" />
                <Button text="Changes in appetite" />
                <Button text="Other" />
            </Question>

            <Question text="Do you engage in any activities to promote relaxation and stress relief?" type="row">
                <Button text="Listening to music" />
                <Button text="Reading" />
                <Button text="Taking baths" />
                <Button text="Other" />
            </Question>
        </SurveyPage>
    );
};
export default SurveyScreen3;