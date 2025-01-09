import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Driver = ({ shops }) => {
  // const [activeTab, setActiveTab] = useState('in-progress-tab')
  // const handleSelect = (tab) => {
  //   setActiveTab(tab)
  // }

  return (
    <>
      <h1>Driver</h1>

      <Tabs>
        <TabList>
          <Tab>In Progress</Tab>
          <Tab>New Requests</Tab>
          <Tab>Delivered</Tab>
        </TabList>

        <TabPanel>
          <h2>Tab: In Progress</h2>
          {shops.map((shop) => (
            <div key={shop._id}>
              <h2>{shop.shopUserName}</h2>
              <p>{shop.location}</p>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Tab: New Requests</h2>
        </TabPanel>
        <TabPanel>
          <h2>Tab: Delivered</h2>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default Driver
