import { NavigationContext } from '@react-navigation/native';
import { Text, Pressable, Image } from 'react-native';
import React, { useContext } from 'react';

export default function LinkButton({ text, img, src, type }) {
    const navigation = React.useContext(NavigationContext);
    const handleClick = () => {
        if (type === "increment") {
            navigation.navigate((parseInt(src) + 1).toString());
        } else if (type === "decrement") {
            navigation.navigate((parseInt(src) - 1).toString());
        } else {
            navigation.navigate(src);
        }
    };

    return (
        <Pressable
            className={img ?
                ("w-1/12 aspect-square") : ("bg-black w-1/3 p-4 mx-4 rounded-3xl")}
            onPress={handleClick}
        >
            {img ? (
                <Image className="w-full h-full" source={img} />
            ) : (
                <Text className="text-gray-50 text-center">{text}</Text>
            )}
        </Pressable>
    )
}