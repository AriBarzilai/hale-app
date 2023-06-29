import SurveyPage from '../components/SurveyPage';
import Question from '../components/Question';
import Button from '../components/Button';
import Slider from '../components/Slider';

function SurveyScreen4() {
    return (
        <SurveyPage title="Treatment Preferences">

            <Question text="Have you previously sought medical treatment for chronic pelvic pain?" type="row">
                <Button text="Yes" />
                <Button text="No" />
            </Question>

            <Question text="Which treatment options have you tried?" type="grid">
                <Button text="Medications" />
                <Button text="Physical therapy" />
                <Button text="Acupuncture" />
                <Button text="Surgery" />
                <Button text="Alternative therapies" />
            </Question>

            <Question text="Are you interested in exploring alternative or complementary treatment approaches?" type="row">
                <Button text="Yes" />
                <Button text="No" />
            </Question>

        </SurveyPage>
    );
};
export default SurveyScreen4;