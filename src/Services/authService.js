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
  localStorage.setItem('authToken', token)
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
  const role = response.data.role
  localStorage.setItem('authToken', token)
  localStorage.setItem('role', role)
  console.log(response.data.role)

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
  localStorage.setItem('authToken', token)
  return response.data
}

export const createOrder = async (data) => {
  const response = await client.post('/order/createOrder', data)
  return response.data
}
