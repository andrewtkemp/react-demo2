import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux"
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import protectedRoute from "components/protectedRoute.";
import * as actions from "actions";
class App extends Component {
    renderButton = () => {
        if (this.props.isLoggedIn) {
            return (
                <button onClick={() => { this.props.login(false) }}>Sign Out</button>
            )
        }
        else {
            return (
                <button onClick={() => { this.props.login(true) }}>Sign In</button>
            )
        }
    }
    renderHeader = () => {
        return (
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/post"> Post </Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }
    render() {
        return (
            <HashRouter>
                <div>
                    {this.renderHeader()}
                    <Route path="/post" component={protectedRoute(CommentBox)} />
                    <Route exact path="/" component={CommentList} />
                </div>
            </HashRouter>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(mapStateToProps, actions)(App)