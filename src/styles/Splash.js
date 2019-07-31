import React, {Component} from 'react'
import {Image, View, StyleSheet, StatusBar, BackHandler} from 'react-native'
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'

export default class Splash extends Component {

    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            BackHandler.exitApp()
        })
      }

    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('Auth')
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image source={require('PATH YOUR IMAGE')}
                       style={styles.image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: hg('80%'),
        width: wd('80%'),
        resizeMode: 'contain',
    }
})
