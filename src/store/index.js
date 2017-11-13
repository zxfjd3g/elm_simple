import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, //商家详情信息
  userInfo: null, //用户信息
  shopid: null,//商铺id
  remarkText: null,//可选备注内容
  inputText: '',//输入备注内容
  invoice: false,//开发票
  cartId: null, //购物车id
  sig: null,//购物车sig
  login: true,//是否登录
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})