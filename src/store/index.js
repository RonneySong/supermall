import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        //state.cartList.push(payload)
        //查找之前数组中是否已经有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        if (oldProduct) {
          //oldProduct.count += 1
          context.commit('addCounter', oldProduct)
          resolve('当前的商品数量+1')
        } else {
          payload.count = 1
          //context.state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
      })
    }
  }
})

export default store 