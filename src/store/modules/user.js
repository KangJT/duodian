// import {} from '@/api'

const user = {
  namespaced: true,
  state: {
    info: {},
    gps_location: JSON.parse(window.localStorage.getItem('location'))
  },
  getters: {},
  mutations: {

  },
  actions: {

  }

}
export default user
