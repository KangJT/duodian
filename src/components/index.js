import Footers from './footer/footer.vue'
import ReturnTop from './topReturn'
import SearchAddress from './searchAddress'
import ResultList from './resultList'
import AnimationLoding from './animationLoding'
import Banner from './banners'
import {Tabs, TabPane} from './tabbar/index'
import Sticky from './sticky'
import {List, ListItem} from './list/index.js'
import ArtileList from './artileList/index'
import ScrollView from './scroll-view/index'
let components = {
  Footers,
  ReturnTop,
  SearchAddress,
  ResultList,
  AnimationLoding,
  Banner,
  Tabs,
  TabPane,
  Sticky,
  List,
  ListItem,
  ArtileList,
  ScrollView
}

export default {
  install (Vue) {
    for (let i in components) {
      Vue.component(i, components[i])
    }
  }
}
