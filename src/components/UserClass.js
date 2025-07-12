import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count1: 1,
            count2: 2,
        }
        console.log(this.props.name, 'Child constructor')

    }

    componentDidMount(){
        console.log(this.props.name, 'Child componentDidMount')

    }

    render(){
        console.log(this.props.name, 'Child render')

        return(
            <div>
            <h5>{this.props.name}</h5>
            <h5>count1: {this.state.count1}</h5>
            <button onClick={()=> {
                this.setState({
                    count1: this.state.count1 +1
                })
            }}>Counter</button>
            <h5>count2: {this.state.count2}</h5>

            </div>
        )
    }
}

export default UserClass;