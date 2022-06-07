import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core' // '@redux-saga/core'
import {reducer} from './app/models/root-reducer'
import { handler as userSage } from './app/models/user/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userSage) // listering...

export {store}
