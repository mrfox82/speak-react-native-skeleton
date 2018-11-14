import React from "react"
import {Image} from "react-native";

export default class MyImage extends React.PureComponent<null> {
    render() {
        const img = {
            uri: 'https://1gr.cz/fotky/idnes/14/052/org/VHA533f6f_dsc_0448.jpg'
        };
        return (
            <Image source={img} style={{width: "100%", height: 350}}/>
        );
    }
}