 import React from "react";
 import Profile from "./profile";
 
 /* const About = () => {
    return(
    <div>
    <h1>--------  About Us Page  --------</h1>
    <p>
    <h2>This is a Namaste react page website</h2>
    </p>
    </div>
    );
}

export default About; 
 */
 export const Trial = ({name, phone, email}) => {
    return(
        <div className=" m-3">
            <h1 className="font-serif">{name}</h1>
            <h1 className="font-serif">{phone}</h1>
            <h1 className="font-serif">{email}</h1>

        </div>
        
    );
}


class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        console.log("Constructor");
    }
    
    Increment = () => {
        this.setState({count : this?.state?.count + 1})
    }

    Decrement = () => {
        this.setState({count : this?.state?.count - 1})
    }

    async componentDidMount(){
        console.log("DidMount")
        const data = await fetch(" https://api.github.com/users/Kaushal2001-coder");
        const json = await data.json();
        console.log(json)
    }

    
    
    render(){
        console.log("render");
        return(
            <div className="p-2 m-2">
                <h1 className="font-semibold text-4xl p-2 m-2">This is a About page</h1>
                <h1 className="text-4xl p-2 m-2">{this.state.count}</h1>
                <button  className="bg-purple-900 p-2 m-2 rounded-md text-white" onClick={this.Increment}>Increment</button>
                <button className="bg-purple-900 p-2 m-2 rounded-md text-white" onClick={this.Decrement}>Decrement</button>
                <Profile name={"FirstChild"}/>
                <Profile name={"SecondChild"}/>
            </div>
            
            
        )
    }
}

export default About; 