import React from 'react'
import {AsyncStorage, Text} from 'react-native'
import axios from 'axios';
import Questions from '../components/Questions'
import {Modules} from '../../words'
import { server } from '../config/common'

export default class ScreenThree extends React.Component {

    is_Mounted = false

    state = {
        valCod: '',
        valSet: '',
        getPer: []
    }

    componentDidMount() {
        this.is_Mounted = true

        obter = axios.get(`${server}/quests/44`)
            .then(res => {this.setState({
                getPer: res.data
            })
        })
      
        getCod = AsyncStorage.getItem('users')
            .then((res) => {
                let valores = JSON.parse(res)  
                
                return valores
            })
            .then((json) => {
                this.setState({                         
                    valCod: json.codfilial,
                    valSet: json.codsetor
                })
            })              
    }

    componentWillUnmount() {
        
        this.is_Mounted = false
    }

    render() {          
        const _onPressValue = () => {
            if(true) {
                send = axios.post(`${server}/answers`, {
                    // RESPOSTA: 1,
                    // NUMSEQ: 1,
                    // CODSETOR: this.state.valSet,
                    // CODFILIAL: this.state.valCod,
                    // CODIGO: 10
                    RESPOSTA: 3,
                    NUMSEQ: 2,
                    CODSETOR: 46,
                    CODFILIAL: 3,
                    CODIGO: 12
                })
            }
        }

        return (
            <Questions 
                nexter={() => this.props.navigation.navigate("ScreenThree")}
                pages={Modules.pg.p2}
                qst = {this.state.getPer.slice(1, 2).map((req, item) => (
                    <Text key={item}>{req.PERGUNTA}</Text>
                ))}
                value={_onPressValue}
            />
        )}
} 