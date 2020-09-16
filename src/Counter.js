import React, { Component } from 'react'
import {ThemeContext} from './App'

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: props.initialCount
        }
    }

    render(){
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={()=> this.changeCount(-1) }> - </button>
                        <span> {this.state.count} </span>
                        <button style={style} onClick={()=> this.changeCount(+1) }> + </button>
                    </div>
                )}
                
            </ThemeContext.Consumer>
        )
    }

    changeCount(amount){
        //key take away: anytime you use the previous state to set the
        //new state, you NEED to use the function version of set state
        this.setState(prevState => {
            return {count: prevState.count + amount}})
        
        //if you dont need to use previous state, then this one works fine
        // this.setState({count: this.state.count + amount})
    }

}
