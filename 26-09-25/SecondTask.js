import { Component} from "react"

class SecondTask extends Component{

    normalFn=()=>{
        this.setState({message:"Good Bye"})
    }

    constructor(props){
        super(props);
        this.state={message:"Hello"}
        this.normalFn=this.normalFn.bind(this)
    }

    render(){
        const {message}=this.state
        return(
            <div>
                <button onClick={this.normalFn}>First Button</button>
                <p>{message}</p>
            </div>
        )
    }
}

export default SecondTask