import AMap from 'AMap'

class Map {
  constructor () {
    this.aMAP = {}
    this.placeSearch = ''
    AMap.plugin('AMap.PlaceSearch', () => {
      this.placeSearch = new AMap.PlaceSearch({
        city: '010'
      })
    })
  }

  geolocation () {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geolocation', () => {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          extensions: 'all'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          resolve(data)
        })
        AMap.event.addListener(geolocation, 'error', (error) => {
          reject(error)
        })
      })
    })
  }

  search (val) {
    return new Promise((resolve) => {
      this.placeSearch.search(val, function (status, result) {
        // 查询成功 result 挤兑匹配的PID信息
        resolve(result)
      })
    })
  }
}
export default new Map()
