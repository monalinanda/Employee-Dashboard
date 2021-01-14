import React, { Component } from 'react';
import { Input, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from "react-redux";
import { loginValidtion } from "../actions";

 class LoginPage extends Component {
    state = {
        username:"",
        password:"" ,
        error: false
    }

    componentDidMount(){
        this.props.loginValidtion();
    }

    handleSubmit =(event)=> {
        event.preventDefault();
        if(this.props.auth.username === this.state.username && 
          this.props.auth.password === this.state.password){
           this.props.history.push("/dashBoard");
        }
        else{
        this.setState({error: true})
        }
      }
    
    render() {
        
        return (
            <div className="login-warpper">
            <form
              className="login-form"
              onSubmit={this.handleSubmit}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">User Name</InputLabel>
                <Input
                  id="email"
                  name="email"
                  value={this.state.username}
                  type="email"
                  onChange={(e) => this.setState({username: e.target.value})}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">password</InputLabel>
                <Input
                  id="password"
                  value={this.state.password}
                  type="password"
                  autoComplete="off"
                  onChange={(e) =>this.setState({password:e.target.value}) }
                />
              </FormControl>
              <div className="login-button">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleClick}
                >
                  Login
                </Button>
               {this.state.error? <div className="error">Incorrect username or password</div>:null}
              </div>
            </form>
          </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { auth: state.auth.user };
  };
export default connect(mapStateToProps, {loginValidtion})(LoginPage);
