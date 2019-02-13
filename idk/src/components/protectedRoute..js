import React, {Component} from "react";
import {connect} from "react-redux";
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount(){
            console.log('componentDidMount')
            this.shouldNavigateAway();
        }
        componentDidUpdate(){
            console.log("componentDidUpdate")
            this.shouldNavigateAway();
        }
        shouldNavigateAway = () => {
            if(!this.props.isLoggedIn){
                this.props.history.push("/")
            }
            else{
                console.log("yes")
            }
        }
        render(){
            return(
                <ChildComponent/>
            )
        }
    }
    const mapStateToProps = (state) =>{
        return{
            isLoggedIn:state.isLoggedIn
        }
    }
    return connect(mapStateToProps)(ComposedComponent);
}