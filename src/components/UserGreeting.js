import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    let message 
    if(this.state.isLoggedIn) {        
    message = <div> <h2>Welcome Ghost!</h2></div>        
    } else {
        message = <div><h2>Welcome Buddy!!</h2></div>        
    }
    return <div>{message}</div>
    // return (
    //     <div>
    //     </div>
    // )
  }
}

export default UserGreeting