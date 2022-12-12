import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/cardlist'
import SearchBox from '../components/searchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


class app extends Component {
  constructor() {
    super()
    this.state = {
        robots: [],
        searchfeild: ''
    }
  }  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users})); 
  }

onSearchChange = (event) =>{
    this.setState({searchfeild : event.target.value})
}


  render()  {
    const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
          <div className='tc'>
              <h1 className="f1">Robofriendss</h1>
              <SearchBox searchChange ={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundry>
                  <Cardlist robots={filteredRobots}/>
                </ErrorBoundry>  
              </Scroll>
          </div>    
      );
    } 
  }
}

export default app;