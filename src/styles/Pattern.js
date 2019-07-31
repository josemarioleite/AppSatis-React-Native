import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'
import { Fonts } from './Fonts'

export default StyleSheet.create ({
    container: {
        height: hg('100%'),
        width: wd('100%'),
    },
    question: {
        color: '#fff',
        top: hg('2%'),
        paddingLeft: wd("6%"),
        fontSize: hg('5%'),
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    questionTh: {
        color: '#fff',
        paddingLeft: wd('3%'),
        fontSize: hg('9%'),
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    viewCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },  
    bordas: {
        width: wd('75%'),
        height: hg('40%'),
        backgroundColor: '#F29483',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 20,
        justifyContent: 'center',
        opacity: 0.9
    },
    borderQst: {
        width: wd('80%'),
        height: hg('50%'),
        backgroundColor: '#F29483',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        opacity: 0.9
    },
    center: {
        flex: 2,
        borderStyle: 'solid',
        right: wd('4.5%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#FFBCB9',
    },
    circle: {
        marginTop: 20,
        width: wd('5%'),
        height: hg('5%'),
        backgroundColor: '#f47f61',
        alignItems: 'center',
        borderRadius: hg('8%'),
        padding: hg('8%'),
    },
    viewCent: {
        alignItems: 'center',
        padding: wd('3%'),
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        width: "35%",
        height: "15%",
        justifyContent: "center",
        alignItems: 'center',
    },
    vote: {
        fontWeight: 'bold',
        fontSize: hg('3%'),
        textTransform: 'uppercase',
        paddingTop: 5,
        color: '#fff',
    },
    ImageBackground: {
        flexDirection: 'column',
        width: wd('100%'),
        height: hg('110%'),
        justifyContent: 'center',
    },
    mini: {
        opacity: 0.5,
        top: hg('15%'),
        width: wd('7%'),
        height: hg('9%'),
        left: wd('5%')
    },
    miniHome: {
        width: wd('8%'),
        height: hg('10%'),
        opacity: 0.5,
        top: hg('22%'),
        right: wd('5%')
    },
    miniThanks: {
        opacity: 0.5,
        top: hg('30%'),
        width: wd('7%'),
        height: hg('9%'),
        left: wd('5%'),
    },
    initialTxt: {
        fontSize: hg('9.5%'),
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: Fonts.Montserrat,
        textTransform: 'uppercase',
        alignSelf: 'center',
        marginBottom: 15,
    },
    txtBtn: {
        fontSize: hg('4%'),
        color: '#fff',
        textTransform: 'uppercase'
    },
    tcb: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wd('19%'),
        height: hg('7.5%'),
        marginLeft: wd('2%'),
        backgroundColor: "#D05F57",  	
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2.5,
    },
    pages: {
        textAlign: 'right',
        fontSize: hg('4%'),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        opacity: 0.7,
        right: wd('7%'),
        top: hg('8%')
    }
})