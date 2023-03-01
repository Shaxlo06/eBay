import { createStore } from 'redux'
import mainReduser from '../redusers/main-reduser'

const store = createStore(mainReduser)

export default store