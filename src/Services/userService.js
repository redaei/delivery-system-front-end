import client from './config'

export const getProfile = async () => {
  const response = await client.get('/admin/profile')
  return response.data
}

export const getShop = async () => {
  const response = await client.get('/shop/shopProfile')
  return response.data
}

export const getDriver = async () => {
  const response = await client.get('/driver/driverProfile')
  return response.data
}
