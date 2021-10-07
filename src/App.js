import React from "react";

function Food({favourite}){
  return <h1>I like {favourite}</h1>;
}

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Food favourite="chicken" />
      <Food favourite="juice" />
      <Food favourite="cola" />
      <Food favourite="cider" />
    </>
  )
}

export default App;
 