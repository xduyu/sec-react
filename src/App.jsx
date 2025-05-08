import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import HeaderMain from './copmonents/header-main-page'
// import Main from './copmonents/main-page'
// import FooterMain from './copmonents/footer-main-page'
// import InfoFunctionMain from './copmonents/infoFunction-main'
// import InfoClass from './copmonents/infoClass'

import Card from './copmonents/card'

import './App.css'

function App() {
  // const product = {
  //   name: 'Product 1',
  //   price: 100
  // }
  // const products = [
  //   {
  //     name: 'Laptop',
  //     price: 1000
  //   },
  //   {
  //     name: 'Phone',
  //     price: 500
  //   },
  //   {
  //     name: 'Tablet',
  //     price: 300
  //   }
  // ]
  
  const user = {
    username: 'ivan',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6mjp9KdFFGTCy5u9AOZyg00uBrZxfUzGgw&s'
  }

  return (
    <div>
      <div className="container">
        {/* <HeaderMain />
        <Main />
        <InfoFunctionMain firstname='ivan' surName="ivanoich" type="func" />
        <FooterMain />
        <InfoClass name='ivan' surName="ivanoich" /> */}
        <Card username={user.username} avatar={user.avatar}></Card>
      </div>
    </div>
  )
}

export default App
