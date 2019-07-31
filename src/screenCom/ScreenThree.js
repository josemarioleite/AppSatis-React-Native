import React from 'react'
import axios from 'axios';
import {AsyncStorage, Text} from 'react-native'
import Questions from '../components/Questions'
import {Modules} from '../../words'
import { server } from '../config/common'
 
// export const _onPressValue = () => {
//     if(true) {
//         send = axios.post(`${server}/answers`, {
//             RESPOSTA: 2,
//             NUMSEQ: Aco3.numSeq,
//             CODSETOR: Aco3.codSector,
//             CODFILIAL: codFilialUser(),
//             CODIGO: Aco3.coder
//         })
//     }
// }

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
      
        // getCod = AsyncStorage.getItem('users')
        //     .then((res) => {
        //         let valores = JSON.parse(res)  
                
        //         return valores
        //     })
        //     .then((json) => {
        //         this.setState({                         
        //             valCod: json.codfilial,
        //             valSet: json.codsetor
        //         })
        //     })              
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
                    RESPOSTA: 4,
                    NUMSEQ: 3,
                    CODSETOR: 46,
                    CODFILIAL: 3,
                    CODIGO: 12
                })
            }
        }

        return (
            <Questions 
                nexter={() => this.props.navigation.navigate("Thanks")}
                pages={Modules.pg.p1}
                qst = {this.state.getPer.slice(2, 3).map((req, item) => (
                    <Text key={item}>{req.PERGUNTA}</Text>
                ))}
                value={_onPressValue}
            />
        )}
} 