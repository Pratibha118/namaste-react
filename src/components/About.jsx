import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

  render() {
    return (
      <div>
        <h4>About</h4>
        <h3>Hello, this is our food App.</h3>
        <UserClass name="First" />
        <UserClass name="Second" />
        <UserContext.Consumer>
          {(data)=><h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
