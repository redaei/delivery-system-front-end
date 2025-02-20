import client from './config'

export const signUp = async (data) => {
  const response = await client.post('/auth/bananaSignup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const signIn = async (data) => {
  const response = await client.post('/auth/bananaSignin', data)
  const token = response.data.token
  const userId = response.data.userId

  localStorage.setItem('authToken', token)
  localStorage.setItem('userId', userId)

  return response.data
}

export const shopSignUp = async (data) => {
  const response = await client.post('/shops/shopSignup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const shopSignIn = async (data) => {
  const response = await client.post('/shops/shopSignin', data)
  const token = response.data.token
  const userId = response.data.userId

  localStorage.setItem('authToken', token)
  localStorage.setItem('userId', userId)

  return response.data
}

export const driverSignUp = async (data) => {
  const response = await client.post('/drivers/driverSignup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const driverSignIn = async (data) => {
  const response = await client.post('/drivers/driverSignin', data)
  const token = response.data.token
  const userId = response.data.userId

  localStorage.setItem('authToken', token)
  localStorage.setItem('userId', userId)

  return response.data
}

export const createOrder = async (data) => {
  const response = await client.post('/orders', data)

  return response.data
}

export const approveShop = async (data) => {
  const newStatus = { status: true }
  const response = await client.put(`/shops/${data}`, newStatus)
  return response.data
}

export const deleteShop = async (data) => {
  const response = await client.delete(`/shops/${data}`)
  return response.data
}

export const approveDriver = async (data) => {
  const newStatus = { status: true }
  const response = await client.put(`/drivers/${data}`, newStatus)
  return response.data
}

export const deleteDriver = async (data) => {
  const response = await client.delete(`/drivers/${data}`)
  return response.data
}
