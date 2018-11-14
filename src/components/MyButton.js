import React from "react"
import {Text, TouchableOpacity} from "react-native"


export default class MyButton extends React.PureComponent<null> {
    render() {
        const press = () => {
            alert("Heureka!")
        };

        return (
            <TouchableOpacity onPress={press} style={{
                alignItems: 'center',
                backgroundColor: '#b20c45',
                borderColor: '#b25757',
                borderWidth: 3,
                width: "80%",
                height: 50
            }}>
                <Text>My First Button</Text>
            </TouchableOpacity>
        )
    }
}
