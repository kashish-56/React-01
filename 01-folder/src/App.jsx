import React from "react";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";

const App = () => {
  return (
      <div className="parent">
          <Card user='Radhika Rani' age={25} img = "https://plus.unsplash.com/premium_photo-1773773368726-7fa464fdf025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"/>
          <Card user='Govind Krishna' age={30} img ="https://plus.unsplash.com/premium_photo-1773833402221-4f34e242a495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    //   {/* <div id='parent'>
    //   <h1 id='child1'>Radhe Radhe</h1>
    //   <h3>Hare Krishna</h3>
    // </div>
    // <div id='grandparent'></div> */}
    //   {/* <Navbar /> */}
    //   {/* {Card()} */}
  );
};

export default App;
