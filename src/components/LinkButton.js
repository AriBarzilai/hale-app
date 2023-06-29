import { NavigationContext } from '@react-navigation/native';
import { Text, Pressable, Image } from 'react-native';
import React, { useContext } from 'react';


/**
 * A button component which navigates to a different page when clicked.
 * 
 * @param text Text to appear on the button
 * @param img Image to appear on the button; if this is present, text will be ignored
 * @param src The page to navigate to when the button is clicked
 * @param type Optional modifiers; "increment" and "decrement" will navigate to the next and previous pages, respectively.
 *            If not specified, the button will navigate to the page specified by src.
 *            WARNING: Assumes that the page names are numeric strings.
 * 
 * @returns 
 */
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