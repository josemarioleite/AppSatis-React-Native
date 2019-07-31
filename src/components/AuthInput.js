import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Immersive} from 'react-native-immersive'

export default props => {
    Immersive.on()
    Immersive.setImmersive(true)

    return (
        <View style={styles.container}>
            <Icon name={props.icon} size={20} style={[styles.icon, props.iconStyle]} />
            <TextInput  {...props} style={[styles.input, props.styleInput]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',        
        borderRadius: 10,
        paddingLeft: 15,
        width: wd('33%'),
        backgroundColor: 'transparent',
        height: 48,
        borderWidth: 2,
        overflow: 'hidden',
        borderColor: '#fff'
    },
    input: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: '#fff',
        textTransform: 'lowercase',
        fontSize: hg('3%'),
        marginTop: hg('1%'),
        marginLeft: wd('1%')
    },
    icon: {
        color: '#fff',

    },
})