import React from 'react';
import View from "./router/index"
import router from "./router/Luyouliebiao"
import {BrowserRouter} from "react-router-dom"
import store from "./store/store"
import {Provider} from "react-redux"
import "./style.css"
// import Left from "./component/Left"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <BrowserRouter>
       
            <View router={router}></View>
        </BrowserRouter>
      </Provider>
       
    </div>
  );
}

export default App;
