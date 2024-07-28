import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css";

class App extends Component {
        constructor(){
        super()
        this.state={
            Robots:[],
            searchfield:""
        }
        }


        componentDidMount(){
            fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
                return response.json();
            })
            .then(users =>{
                this.setState({Robots:users})
            });
        }

        OnSearchChange=(event)=>{
            this.setState({searchfield: event.target.value})
        }



        render(){
            const filteredRobots=this.state.Robots.filter(Robots =>{
                return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            if(this.state.Robots.length===0){
                return <h1>Loading</h1>
            } else {
                return(
                    <div className="tc">
                        <h1>ROBO FRIENDS</h1>
                        <SearchBox searchChange={this.OnSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList Robots={filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                
            
                );
            }
        

    }

}
export default App;

