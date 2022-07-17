import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
//import {robots} from '../Components/Robots' // no longer need this since we are using an API
import '../Containers/App';
import Scroll from '../Components/Scroll';


class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots: [], //This is where the API will do a GET request from an API.
            searchfield: ''
        } //we have two states that are owned by App and anything in the app can use the object states. React uses the states to update
        //the states of the view.
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //get the users
            .then(response => response.json()) //get the responses
            .then(users => this.setState({robots: users})) //update the users
    }

    onSearchChange = (event) => { //passing this down to the searchbox and the search box lets the app know there has been a change.
        this.setState({searchfield: event.target.value})
    };

    render () {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => { //we filter the robots state to only include what is in the searchfield.
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        }); //Now filtered robots can be passed to the cardlist
            return !robots.length ?  // Checking timeing and automatically if it is zero (true) return false. Using conditional
            <h1>Getting your friends!</h1> :
            (
                <div className='tc'>
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap');
                    </style>
                    <h1 className="f1"> RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </div>
            );
    }
}



export default App;

//Use STATE to send data up to the parent to change things on the view. Simply an object.
//State in this case is the robots and we are able to change what Robots array means. Props are simple things that come out of state
// STATE >> props. Parent sends the STATE to the child compenant that cannot change it but updates the view. 
// STATE is something that can change and change our app. It is a smart compenant
//Event.target.value just gives the value for the event that is happening 
// Cardlist is being passed with the state and searchBox is being given the object of onSearchChange function to be passed.
//if you make your own thing make sure to make it a function