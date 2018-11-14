import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
});

export default class MyTitle extends React.PureComponent<props> {
    render() {
        return (
            <View style={{alignItems: 'center', backgroundColor: 'skyblue',}}>
                <Text>My {this.props.name}!</Text>
            </View>
        );
    }
}
