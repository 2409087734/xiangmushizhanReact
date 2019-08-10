import React from 'react';
import View from "./router/index"
import router from "./router/Luyouliebiao"
import {BrowserRouter} from "react-router-dom"
import "./style.css"
// import Left from "./component/Left"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
       
            <View router={router}></View>
        </BrowserRouter>
    </div>
  );
}

export default App;
