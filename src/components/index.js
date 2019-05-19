import Footers from './footer/footer.vue'
import ReturnTop from './topReturn'
import SearchAddress from './searchAddress'
import ResultList from './resultList'
import AnimationLoding from './animationLoding'
import Banner from './banners'
import Tabbar from './tabbar'
let components = {
  Footers,
  ReturnTop,
  SearchAddress,
  ResultList,
  AnimationLoding,
  Banner,
  Tabbar
}

export default {
  install (Vue) {
    for (let i in components) {
      Vue.component(i, components[i])
    }
  }
}
