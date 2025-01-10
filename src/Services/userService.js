import client from './config'

export const getProfile = async (userType) => {
  const response = await client.get('/admin/profile')
  return response.data
}

export const getShop = async () => {
  const response = await client.get('/shops/shopProfile')
  return response.data
}
export const getShops = async () => {
  const response = await client.get('/shops')

  return response.data.shops
}

export const getDriver = async () => {
  const response = await client.get('/drivers/driverProfile')
  return response.data
}

export const getOrder = async () => {
  const response = await client.get('/orders')
  return response.data
}
