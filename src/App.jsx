import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import { ProductCard } from "./components/card";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom" 
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false)
  const [formItems, setFormItems] = useState({
    name: "",
    accNo: "",
    amount: null,
    to: "",
  });

  useEffect(() => {
    console.log("Happy Day")
  },[])

  const productArray = [
    {
      price: "#50",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      description: "Nice",
    },
    {
      price: "#30",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      description: " A good thing",
    },
    {
      price: "#10",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      description: "welcome",
    },
    {
      price: "#12",
      img: "https://media.gettyimages.com/id/1320231994/photo/african-megacity-lagos-nigeria.jpg?s=612x612&w=gi&k=20&c=qsUw17xKeX8dxXcZU-Xko5fFWtRVBRb5F0XdPPjUdfY=",
      description: " A good thing",
    },
    {
      price: "#100",
      img: "https:https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      description: "Positive",
    },
  ];

  const handleForm = () => {
    setLoading(true);
    // setLoading(false);

  };

  // name, acc num, amount, to

  return (
    <>
      {/* <Navbar img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='Image of a tree' /> */}
      {/* {productArray.map(item => (
        <ProductCard img={item.img} price={item.price} description={item.description}/>
      ))} */}
      {loading ? (
        <div className="h-screen w-full grid place-content-center">
          Loading....
          <button onClick={() => {
            setLoading(false)
            setShowMessage(true)
          }} >Proceed</button>
        </div>
      ) : (
        <div className="grid place-content-center h-screen w-full">
          {showMessage && <div>
            <p>Thank you {formItems.name} for sneding #{formItems.amount} into account number:{formItems.accNo} to {formItems.to}</p>
          </div>}
          <label htmlFor="">Name:</label>
          <input
            type="text"
            required
            className="border-2 border-black "
            value={formItems.name}
            onChange={(e) =>
              setFormItems({ ...formItems, name: e.target.value })
            }
          />
          <label htmlFor="">Account Number:</label>
          <input
            className="border-2 border-black "
            type="text"
            required
            value={formItems.accNo}
            onChange={(e) =>
              setFormItems({ ...formItems, accNo: e.target.value })
            }
          />
          <label htmlFor="">Amount:</label>
          <input
            className="border-2 border-black "
            type="text"
            required
            value={formItems.amount}
            onChange={(e) =>
              setFormItems({ ...formItems, amount: e.target.value })
            }
          />
          <label htmlFor="">To:</label>
          <input
            className="border-2 border-black "
            type="text"
            required
            value={formItems.to}
            onChange={(e) => setFormItems({ ...formItems, to: e.target.value })}
          />
          <input
            onClick={handleForm}
            type="submit"
            required
            value="Submit"
            className="mt-2 border-2 border-black px-4 py-2 cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default App;

export function TakeBack() {
  return (
    <div>
      <div></div>
    </div>
  );
}

// class Meta {
// constructor(state, props){
// this.state = 0
// this.length = props
// }
// handlegetData(){

// }
// }
