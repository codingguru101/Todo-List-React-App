import React from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends React.Component {
 state = {
   todos: [
     {
       id: 1,
       title: 'Take out the trash',
       completed: false
       
     },
     {
      id: 2,
      title: 'Dinner with wife',
      completed: false
      
    },
    {
      id: 3,
      title: 'Meeting with Boss',
      completed: false
      
    },
     
   ]
 }

 markComplete = () => {}

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
