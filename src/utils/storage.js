let storage = {
  getItem (key) {
    let data = localStorage.getItem(key)
    if (data && data.indexOf('{') !== -1) {
      data = JSON.parse(data)
    }
    return data
  },
  setItem (key, value) {
    let data = JSON.stringify(value)
    localStorage.setItem(key, data)
    return data
  },
  clientItem (key) {
    localStorage.clear(key)
  },
  removeItem () {},
  clear () {}
}

export default storage
