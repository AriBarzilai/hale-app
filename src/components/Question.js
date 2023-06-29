import { View, Text } from 'react-native';

/**
 * A wrapper component for displaying a question in a survey.
 * Consists of text (the question) and children components.
 * 
 * 
 * @param {*} text the question to be displayed, giving context to the children components 
 * @param {*} type the type of question, which determines how the children components are displayed.
 * If values are "grid" or "row", the children components are displayed in a grid or row, respectively.
 * If no value is given, the children components are displayed in a column.
 * @param {*} children the components to be displayed below the question
 * 
 * @returns A container containing stylized text above children components
 */
const Question = ({ text, type, children }) => {

    /**
     * Used to modify the children container's styles based on the type of question.
     * Intended use is to display buttons in a horizontally-contained grid or in a single row which can overflow.
     * 
     * @param {*} type 
     * @returns 
     */
    const modifyContainerStyles = (type) => {
        let containerStyle = '';

        // TODO: Use tailwind's grid function instead of flexbox (figure out why grid isn't working)
        if (type === 'grid') {
            containerStyle += ' flex-row flex-wrap';
        } else if (type === 'row') {
            containerStyle += ' flex-row flex-nowrap overflow-scroll';
        }

        return containerStyle;
    };

    const containerStyle = modifyContainerStyles(type);
    return (
        <View className="w-3/4">
            <Text className=" text-xl mb-3 text-left font-bold">{text}</Text>
            <View className={containerStyle}>
                {children}
            </View>
        </View>
    );
}; export default Question;