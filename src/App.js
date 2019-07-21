import React, {Component} from "react";
import CounterConfig from "./components/Counter/CounterConfig.jsx"


class App extends Component {


   render() {
       return ( //crea el html
    <div>
        <CounterConfig/>
    </div>
       );
   }
}

export default App;