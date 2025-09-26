import { Component} from "react"

class FourthTask extends Component{
    state={
       date:""
    }

    normalFn(){
        this.setState({date:new Date().toString()})
    }

    arrowFn=()=>{
        this.setState({
            message:"Good Bye"
        })
    }


    constructor(props){
        super(props);
        this.state={message:"Hello"}
        this.normalFn=this.normalFn.bind(this)
    }

    render(){
        const {message,date}=this.state
        return(
            <div>
                <button onClick={this.normalFn}>First Button</button>
                <p>Date : {date}</p>
                <p>{message}</p>
                <button onClick={this.arrowFn}>Second Button</button>
            </div>
        )
    }
}

export default FourthTask