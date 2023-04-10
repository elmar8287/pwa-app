import React from 'react';
import Nav from '../Nav/Nav';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(true);
  const dataHandle = () => {
    setData(!data)
    console.log("Button pushed")
  }
  return (
    <>
      <Navbar />
      <Main data={data}/>
      <Nav dataHandle={dataHandle}/>
    </>
  );
}

export default App;
