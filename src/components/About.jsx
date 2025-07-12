import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log('Parent constructor')
    }

    componentDidMount(){
        console.log('Parent componentDidMount')
    }

  render() {
        console.log('Parent render')
    return (
      <div>
        <h4>About</h4>
        <h3>Hello, this is our food App.</h3>
        <UserClass name="First" />
        <UserClass name="Second" />
      </div>
    );
  }
}

export default About;
