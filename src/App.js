import "./App.css";
import React from "react";
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from "./containers/HeaderContainer";

function App(){
  return(

    <div className="App">
      {/* <h1> 5. File or Folder Structure</h1> */}
      {/* <h1> 6. Design for add to cart</h1> */}
      {/* <h1> 7. Actions</h1> */}
      {/* <h1> 8. reducer and rootReducer</h1> */}
      {/* <h1> 9 Container - mapDispatchToProps - mapStateToProps</h1> */}
      {/* <h1> 10 complete flow</h1> */}
      {/* <h1> 11 share data between component</h1> */}
      {/* <h1> 12 remove to cart</h1> */}
      {/* to send the data from one component to another component we used props */}
{/* <Home />     //directly import it from homeconatiner */}


<HeaderContainer />
<HomeContainer /> 
{/* when we use redux we use component with container, so we transfer the dta from home to conatiner because we want to map the data   */}
    </div>
  )
}
export default App;




// import "./App.css";
// import React from "react";
// import User from "./User";
// function App(){
//   return(

//     <div className="App">
//       <h1> Props Revision in Redux</h1>
//       {/* to send the data from one component to another component we used props */}
//     <User data = {{name: 'amber sattar', age: 22}}/>
//     </div>
//   )
// }
// export default App;




// import "./App.css";
// import React from "react";
// function App(){
//   return(

//     <div className="App">
//       <h1>React Redux</h1>
//       <p>Redux is a container where you can store your whole application data, 
//         so we can call it to state management. It does not belong to the compon state  </p>
//     </div>
//   )
// }
// export default App;