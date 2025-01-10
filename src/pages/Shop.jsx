import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Shop = ({ shops }) => {
  return (
    <>
      <h2>Shop Page:</h2>
      <h3>{shops[0].shopUserName}</h3>
      <form action="/order/createOrder">
        <input type="submit" value="New Order" />
      </form>
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

export default Shop
