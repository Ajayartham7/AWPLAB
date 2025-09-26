import { Component} from "react"

class ThirdTask extends Component{
    state={message:"Hello"}

    normalFn=()=>{
        this.setState({message:"Good Bye"})
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

export default ThirdTask