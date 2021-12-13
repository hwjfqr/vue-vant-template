const getItem = <T>(key: string) => {
  try {
    const data = localStorage.getItem(key)
    if (!data) return {} as T
    return JSON.parse(data) as T
  } catch {
    console.error('JSON.parse 出错，请检查本地存储！')
    return {} as T
  }
}

const setItem = (key: string, value: object | string) => {
  if (typeof value === 'object') value = JSON.stringify(value)
  window.localStorage.setItem(key, value)
}

const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

const storage = {
  getItem,
  setItem,
  removeItem
}

export default storage
