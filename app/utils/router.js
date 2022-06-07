import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Home} from '../home/index'
import { Detail } from '../detail'


const MainStack = createStackNavigator({
    Home:{
        screen:Home,
    },
    Detail:{
        screen:Detail
    }
})

const Navigation = createAppContainer(MainStack)

export{Navigation}