import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        console.log("Child Constructor" + this.props.name);
    }
    
    componentDidMount(){
        console.log("Child DidMount" + this.props.name);
    }
    
    render(){
        console.log("Child Render" +  this.props.name);
    }
}

export default Profile;