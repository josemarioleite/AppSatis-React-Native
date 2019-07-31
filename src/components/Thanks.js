import React from 'react'
import { StatusBar ,View, Image, ImageBackground, Text} from 'react-native'
import Style from '../styles/Pattern'

export default class Thanks extends React.Component {

    state = {
        msg: 'Thanks'
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <ImageBackground source={require('YOUR IMAGE EXIT')} style={Style.ImageBackground}>
                    <View style={Style.viewCent}>
                        <Text style={Style.questionTh}>{this.state.msg}</Text>
                    </View>
                    <Image style={Style.miniThanks} source={require('IMAGE FOR DOWN')} />
                </ImageBackground>
            </View>
        )
    }

    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('Home') },
            2000
        )
    }
}
