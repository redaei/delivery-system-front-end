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
  const response = await client.post('/shop/shopSignup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const shopSignIn = async (data) => {
  const response = await client.post('/shop/shopSignin', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const driverSignUp = async (data) => {
  const response = await client.post('/driver/driverSignup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const driverSignIn = async (data) => {
  const response = await client.post('/driver/driverSignin', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}
