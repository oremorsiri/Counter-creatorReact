import React from "react";
import Counter from "./Counter.jsx";

class CounterConfig extends React.Component {
       constructor(props){ //creo un constructor con propiedades
           super(props); // hereda las propiedades del padre
           this.state={ //coge los datos de start y step que da el usuario
               counters:[]
           }
       }
    
    createCounters = (event) => { 
       event.preventDefault()
       this.setState({
           counters: [...this.state.counters, <Counter start={event.target.start.value} step={event.target.step.value}
             key={Date.now()}/>]
       })
       event.target.start.value="";
      event.target.step.value=""
    }
    
       render() {
           return ( //crea el html
        <div className="counterDiv">
            
        <h1>Create your counter:</h1>
            <form onSubmit={this.createCounters}>
            <input className="inputCounter" placeholder="Introduce a start" name="start"/>
            <input className="inputCounter" placeholder="Introduce a step" name="step"/>
            <button type="submit">Create a counter</button>
            </form>
             {this.state.counters} 
        </div>
           );
       }
    };

    export default CounterConfig;