import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// smodel获取route信息
global.__ROUTE_STORE__ = store.state

export default store
