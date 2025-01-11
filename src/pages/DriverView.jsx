import { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { approveDriver, deleteDriver } from '../Services/authService'
import { useNavigate } from 'react-router-dom'

import 'react-tabs/style/react-tabs.css'

const DriverView = ({ edit }) => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await approveDriver(edit._id)

      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProfile = async (e) => {
    e.preventDefault()
    try {
      await deleteDriver(edit._id)
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {}, [])
  return (
    <>
      <div>
        <h3>Approve page</h3>
        <h2>name:{edit.driverName}</h2>
        <h3>username:{edit.driverUserName}</h3>
        <h3>Phone Number:{edit.phone}</h3>
        <h3>is approved{edit.status}</h3>
        {edit.status ? (
          <button onClick={deleteProfile}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>approve</button>
        )}
      </div>
    </>
  )
}

export default DriverView
