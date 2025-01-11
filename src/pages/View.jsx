import { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { approveShop, deleteShop } from '../Services/authService'
import { useNavigate } from 'react-router-dom'
const View = ({ edit, getShopProfile }) => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await approveShop(edit._id)

      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProfile = async (e) => {
    e.preventDefault()
    try {
      await deleteShop(edit._id)
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {}, [])
  return (
    <>
      <div>
        <h3>Approve page:</h3>
        <h2>Edit:{edit.shopUserName}</h2>
        <h3>Location:{edit.location}</h3>
        <h3>Phone Number:{edit.phone}</h3>
        <h3>is approved {edit.status}</h3>
        {edit.status ? (
          <button onClick={deleteProfile}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>approve</button>
        )}
      </div>
    </>
  )
}

export default View
