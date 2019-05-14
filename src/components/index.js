import Footers from './footer/footer.vue'

let components = {
  Footers
}

export default {
  install (Vue) {
    for (let i in components) {
      Vue.component(i, components[i])
    }
  }
}
