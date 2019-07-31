import React from 'react'
import {View, Image, TouchableHighlight} from 'react-native'

export default props => {

    return (
    <View>
            <TouchableHighlight onPressIn={props.out}                                                            
                                onPress={props.press} 
                                underlayColor='transparent'>
                <Image {...props} />
            </TouchableHighlight>
        </View>
  )
}

