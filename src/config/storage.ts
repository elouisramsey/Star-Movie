import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const saveToStorage = (key: string, object: boolean, data: any) => {
  const isDataanObject = object ? JSON.stringify(data) : data
  storage.set(key, isDataanObject)
}

export const getFromStorage = (key: string, object: boolean) => {
  const data = storage.getString(key)
  const value = data && object ? JSON.parse(data) : data

  return value
}
