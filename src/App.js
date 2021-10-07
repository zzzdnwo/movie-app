import React from "react";

function Food({name,picture}){
  return <div>
           <h2>I like {name} </h2>
           <img src={picture} alt=""/>
        </div>;
}

const foodILike = [
  {name: "chicken", image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"},
  {name: "juice", image:"https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"}
]

function App() {
  return (
    <>
      {foodILike.map( dish => (<Food name={dish.name} picture={dish.image} /> ))}
    </>
  )
}

export default App;
 