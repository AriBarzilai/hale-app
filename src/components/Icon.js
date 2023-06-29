import React from 'react';
import { View, Image } from 'react-native';

/**
 * A component for displaying an icon.
 * 
 * TODO: Find out why shadows aren't working.
 * 
 * @param {*} source source path for the image to be used
 * @returns An image inside a rounded rectangle.
 */
const Icon = ({ source }) => {
    return (
        <View className="mt-2 h-3/4 bg-white rounded-3xl flex-shrink justify-center aspect-square shadow-md">
            <Image
                className="mx-auto object-scale-down h-10 w-10"
                source={source}
            />
        </View>
    );
};

export default Icon;