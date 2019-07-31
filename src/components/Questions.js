import React from 'react'
import {StatusBar, View, Image, ImageBackground, Text, StyleSheet} from 'react-native'
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from 'react-native-responsive-screen'
import {Modules} from '../../words'
import Style from '../styles/Pattern'
import Componenter from './Componenter'

export default class Questions extends React.Component {
    render() {
        return (
            <View style={Style.container}>            
            <StatusBar hidden={true} />
            <ImageBackground source={require('../assets/fundo.png')} style={Style.ImageBackground}>                                        
                <View style={Style.borderQst}>
                    <Text  style={Style.question}>{this.props.qst}</Text>
                    <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
                        <View style={styles.containerBorder} />

                        <View style={Style.center}>

                            <View style={Style.viewCent}>                                                       
                                <Componenter style={Style.circle}                                                                                                                                                                                                     
                                            out={this.props.nexter}                                            
                                            press={this.props.value} 
                                            source={require('IMAGE 1')}>                                                   
                                </Componenter>
                                <Text style={Style.vote}>{Modules.resps.terrible}</Text>                                                                                                                            
                            </View>

                            <View style={Style.viewCent}>                                                                 
                                <Componenter style={Style.circle} 
                                            out={this.props.nexter}
                                            press={this.props.value} 
                                            source={require('IMAGE 2')}
                                        />
                                <Text style={Style.vote}>{Modules.resps.bad}</Text>                            
                            </View>

                            <View style={Style.viewCent}>                                                                 
                                <Componenter style={Style.circle} 
                                            press={this.props.value}
                                            out={this.props.nexter} 
                                            source={require('IMAGE 3')}
                                        />
                                <Text style={Style.vote}>{Modules.resps.regular}</Text>                            
                            </View>

                            <View style={Style.viewCent} >                                                                 
                                <Componenter style={Style.circle} 
                                            press={this.props.value} 
                                            out={this.props.nexter}
                                            source={require('IMAGE 4')}
                                        />
                                <Text style={Style.vote}>{Modules.resps.good}</Text>                            
                            </View>

                            <View style={Style.viewCent}>                                                                 
                                <Componenter style={Style.circle} 
                                            press={this.props.value}
                                            out={this.props.nexter} 
                                            source={require('IMAGE 2')}
                                        />
                                <Text style={Style.vote}>{Modules.resps.great}</Text>                            
                            </View>

                        </View>               
                    </View>
                </View>
                <Image style={Style.mini} source={require('IMAGE FOR DOWN')} />
                <Text style={Style.pages}>{this.props.pages}</Text>
            </ImageBackground>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    containerBorder: {
        flexDirection: 'column',
        height: wd('8%'),
        bottom: hg('20%'),
        opacity: 0.6,
        marginLeft: wd('4%'),
        alignSelf: 'center',
        borderColor: '#E8E120',
        borderWidth: wd('0.2%'),
    }
})
