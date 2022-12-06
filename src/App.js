import {BrowserRouter,Routes,Route} from 'react-router-dom'
   import Home from './Components/Home'
   import About from './Components/About'
   import Contact from './Components/Contact'
   import Navbar from './Components/Navbar'
import React from 'react'





// import Events from './Events'
// import PropsExample from './PropsExample'
// function App(){
//    return(
//        <div>
//          <Events/>
//            <h1> This is about props example</h1>
//            <PropsExample name="Bharath" age="21"/>
//         </div>
//         )
//     }
//  export default App


{/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"
function App(){
  return (
  <div>
        <ClassComponent/>
        <ClassComponent2/>
        <img src="https://i.pinimg.com/originals/50/0c/71/500c71d6306965ba9c2a819e038c3f77.jpg"/> 
        <p> my name is bharath redddy </p>
        <h1>Learn React</h1>   
  </div>
 )
}
   export default App*/}

   

   // function App(){
   //    return(
   //       <div>
   //          <BrowserRouter>
   //          <Navbar/>
   //          <Routes>
   //             <Route path="/" element={<Home/>}/>
   //             <Route path="/about" element={<About/>}/>
   //             <Route path="/contact" element={<Contact/>}/>
   //          </Routes>
   //          </BrowserRouter>
   //       </div>
   //    )
   // export default App


   function About(){
      return React.createElement("div",{id:"demo",className:"democlass"},
      React.createElement("h1",null,"About page))
   }
   export default App