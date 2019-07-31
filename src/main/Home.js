import  React from 'react'
import {StatusBar, Text, ImageBackground, Image, View, TouchableOpacity, StyleSheet} from 'react-native'
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'
import  Style from '../styles/Pattern'
import {Immersive} from 'react-native-immersive'


const Home = ({navigation}) => {  
    
    Immersive.on()
    Immersive.setImmersive(true)

    return (
        <View style={Style.container}>
            <StatusBar hidden={true} />
            <ImageBackground style={Style.ImageBackground} source={require('YOUR IMAGE BACKGROUND')}>  

                <View style={Style.viewCenter}>  
                    <View style={{flexDirection: 'row', alignContent: 'center'}}>
                        <View style={stl.containerView}/>

                        <View style={stl.bordas}>
                            <Text style={stl.text}>Pesquisa de Satisfação</Text>
                                <TouchableOpacity style={Style.tcb} onPress={() => navigation.navigate('ScreenOne')}>
                                    <Text style={stl.txtBtn}>I n i c i a r</Text>
                                </TouchableOpacity>
                        </View>
                    </View>

                <Image style={stl.img} source={require('IMAGE FOR DOWN')} />
                </View>
            </ImageBackground>
        </View>
    )}

export default Home

const stl = StyleSheet.create({
    containerView: {
        flexDirection: 'column',
        height: wd('12%'),
        top: hg('1.5%'),
        opacity: 0.6,
        marginRight: wd('1.5%'),
        alignSelf: 'center',
        borderColor: '#E8E120',
        borderWidth: wd('0.2%'),
    },
    bordas: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    img: {
        width: wd('7%'),
        height: hg('8%'),
        opacity: 0.7,
        top: hg('27%'),
        right: wd('8%')
    },

    text: {
        fontSize: wd('6%'), 
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        alignSelf: 'center',
        marginBottom: 15,
    },
    txtBtn: {
        fontSize: hg('3%'),
        color: '#fff',
        textTransform: 'uppercase'
    }
})

