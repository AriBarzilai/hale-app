import React, { useState } from 'react';
import { View, Stack, Image, Slider } from 'react-native';
import Icon from './Icon';
import sadIcon from '../../assets/sad-icon.png';
import happyIcon from '../../assets/happy-icon.png';

//TODO: import Slider from '@react-native-community/slider' instead of from react-native (deprecated).
//TODO: figure out why importing from @react-native-community/slider causes crash
//TODO: Make slider animation smoother and less jittery when changing values

/**
 * A slider component for a survey, to be used inside a <Question> component.
 * 
 * @returns A slider surrounded by two icons which imply the scale of the slider.
 */

const MySlider = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    return (
        <View className="h-20 mx-auto flex-row rounded-full bg-white px-3">
            <Icon source={sadIcon} className="" />
            <View className="flex-grow justify-center">
                <Slider
                    minimumTrackTintColor="#64BB5F"
                    maximumTrackTintColor="#C8D0DD"
                    thumbTintColor="#64BB5F"

                    className="w-full "
                    minimumValue={0}
                    maximumValue={1000}
                    value={sliderValue}
                    onValueChange={handleSliderChange}

                />
            </View>
            <Icon source={happyIcon} className="mr-2 " />
        </View>
    );
};

export default MySlider;