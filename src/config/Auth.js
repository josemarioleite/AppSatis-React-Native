import React, {Component} from 'react'
import {YellowBox, ImageBackground, Image, View, TouchableHighlight, StyleSheet, Text, AsyncStorage} from 'react-native'
import axios from 'axios'
import Toast from 'react-native-root-toast'
import {server} from './common'
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {

    state = {
        stageNew: false,
        name:'',
        password:'',
        confirmPassword:'',
        codfilial:'',
        codsetor: '',
        valor: ''
    }    

    onPressValue = () => {
        var newCount = this.state.id + 1
        this.setState({
            id: newCount
        })
    }

    login = () => {
        Toast.show('E-mail/Senha incorretos!', ({
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            shadowColor: '#fff',
            animation: true,
            hideOnPress: true,
            delay: 0,
            textColor: '#fff',
            backgroundColor: '#ff2222'
        }))
    }

    signuPass = () => {
        Toast.show('Ops, algo está errado, Tente novamente!', ({
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            shadowColor: '#fff',
            animation: true,
            hideOnPress: true,
            delay: 0,
            textColor: '#fff',
            backgroundColor: '#ff2222'
        }))                 
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                NAMEUSER: this.state.name,
                PASSWDUSER: this.state.password
            })

            axios.defaults.headers.common['Authorization']
                = `bearer ${res.data.token}`
            AsyncStorage.setItem('users', JSON.stringify(res.data))
            this.props.navigation.navigate('Home', res.data)
        } 
        catch (err) {
            if (err) {
                this.signuPass()
            }
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                NAMEUSER: this.state.name,
                PASSWDUSER: this.state.password,
                CONFIRMPASSWDUSER: this.state.confirmPassword,
                CODFILIALUSER: this.state.codfilial,
                CODSETORUSER: this.state.codsetor
            })
            if(true) {
                Toast.show('Usuário cadastrado com Sucesso!', ({
                    duration: Toast.durations.SHORT,
                    backgroundColor: '#008507',
                    shadowColor: '#000',
                    delay: 0,
                    textColor: '#FFF',
                    textStyle: 10,
                }))
            }
            this.setState({ stageNew: false })
        } catch (err) {
            this.signuPass(err)
        }
    }

    signinOrSignup = () => {
        if(this.state.stageNew) {
            this.signup()
        }
        else {
            this.signin()
        }
    }

    render() {

        const validations = []

        validations.push(this.state.password && this.state.password.length >= 5)

        if(this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)          
        }

        const validForm = validations.reduce((all, v) => all && v)
        
        YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core'])
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.ImageBackground} source={require('YOUR IMAGE BACKGROUND')}>
                    <View style={styles.viewCenter}>                
                        <Image style={styles.miniHome} source={require('IMAGE FOR DOWN')} />

                        <AuthInput placeholder='Usuário'                        
                            icon='user'    
                            value={this.state.name}
                            onChangeText={name => this.setState({name})}                     
                            placeholderTextColor='#fff'                                                        
                        />

                        {this.state.stageNew &&
                            <AuthInput 
                                icon='building'
                                placeholder='Código da Filial'
                                value={this.state.codfilial}                               
                                onChangeText={codfilial => this.setState({codfilial})} 
                                placeholderTextColor='#fff' 
                            />
                        }

                        {this.state.stageNew &&
                            <AuthInput 
                                icon='filter'
                                placeholder='Código do Setor'
                                value={this.state.codsetor}                               
                                onChangeText={codsetor => this.setState({codsetor})} 
                                placeholderTextColor='#fff' 
                            />
                        }   

                        <AuthInput placeholder='Senha'
                            icon='lock'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({password})} 
                            placeholderTextColor='#fff' 
                        />
                        
                        {this.state.stageNew &&
                            <AuthInput
                                icon='check'       
                                secureTextEntry={true}                     
                                placeholder='Confirme a Senha'
                                styleInput={styles.place}
                                placeholderTextColor='#fff'
                                value={this.state.confirmPassword}
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            />
                        }            

                        <TouchableHighlight disabled={!validForm}
                                            underlayColor="transparent"
                                            onPress={this.signinOrSignup} 
                                            style={styles.tcb}>
                                <Text style={styles.txtBtn}>
                                    {this.state.stageNew ? 'REGISTRAR' : 'ENTRAR'}
                                </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="transparent" 
                                        onPress={() => this.setState({ 
                                            stageNew: !this.state.stageNew
                                        })} 
                                        style={styles.buttom}>
                            <Text style={styles.buttomText}>{this.state.stageNew ? 'J Á  P O S S U O  U M  L O G I N' 
                            : 'N Ã O  T E N H O  U M  L O G I N'}</Text>
                        </TouchableHighlight>            
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    place: {
        right: wd('1.2%')
    },
    ImageBackground: {
        flexDirection: 'column',
        width: wd('100%'),
        height: hg('110%'),
        justifyContent: 'center',
    },  
    miniHome: {
        width: wd('25%'),
        height: hg('20%'),
    },
    viewCenter: {    
        alignItems: 'center'
    },
    txtBtn: {
        fontSize: hg('3%'),        
        color: '#fff',
        textTransform: 'uppercase'
    },
    tcb: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hg('1%'),
        width: wd('18%'),
        height: hg('8%'),
        backgroundColor: "transparent",
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 3
    },
    buttomText: {
        fontSize: hg('2%'),
        marginTop: hg('3%'),
        color: '#fff',
        textDecorationLine: 'underline'
    }
})

