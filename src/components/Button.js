import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

/**
 * A general button component for a survey, to be used inside a <Question> component.
 * Changes colors when clicked.
 * 
 * @param {*} text text to be displayed on the button
 * @returns the button
 */
export default function Button({ text }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed((prevState) => !prevState);
    };

    return (
        <Pressable
            className={`p-2 rounded-full mr-3 mb-3 ${isPressed ? 'bg-violet-100' : 'bg-gray-100'}`}
            onPress={handlePress}
        >
            <Text className={`${isPressed ? 'text-indigo-500' : 'text-neutral-800'}`}>
                {text}
            </Text>
        </Pressable>
    );
}