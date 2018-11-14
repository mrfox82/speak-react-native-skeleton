// @flow
import React from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'

// components
import {MyTitle} from '../components'
import {MyImage} from '../components'
import {MyButton} from '../components'

import {Colors, Metrics} from "../themes";
// import {Colors} from '../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        marginTop: 25,

    },
})


export default class RootContainer extends React.PureComponent<null> {
    render() {
        return (
            <ScrollView style={styles.container}>

                <MyTitle name="first title"/>
                <MyImage/>
                <MyButton/>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus, tortor non interdum
                    ultricies, felis libero accumsan diam, ac tempor erat mi non dolor. Aliquam semper urna magna, at
                    tincidunt sem lobortis a. Nullam ac eros iaculis, pulvinar tortor vel, ultrices sem. Nulla cursus
                    metus a nunc euismod egestas. Nulla at maximus enim, eget tempor dui. Vestibulum neque lorem,
                    rhoncus at congue nec, ornare at nisi. Proin vulputate sapien id nisl porta, sed dignissim nunc
                    aliquam. Nunc tempus velit sem, quis malesuada purus tempor non. Vestibulum in metus sollicitudin,
                    aliquam turpis sed, pharetra est. Mauris vitae elementum nunc. Maecenas nulla lectus, maximus vitae
                    urna id, hendrerit pulvinar enim. Nunc id libero lobortis, varius tortor dignissim, feugiat elit.
                    Sed sed orci eu diam commodo hendrerit non id eros.
                </Text>
            </ScrollView>
        )
    }
}
