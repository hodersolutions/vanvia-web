import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/userActions';

class SignIn extends Component {	
    constructor() {
		super();
		this.state = {
			uid: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();		
		this.props.authenticateUser({
			uid: this.state.uid,
			password: this.state.password
		});
	}
    render() {				
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/'/>;
		}
		else {			
			return (
				<section className = "sign-in">
					<div className = "container">
						<div className = "signin-content">
							<div className = "signin-image">
								<figure><img src="images/signin-image.PNG" alt="SignIn"/></figure>
								<Link to="/register" className = "signup-image-link">Create an account</Link>
						</div>
	
						<div className = "signin-form">
							<h2 className = "form-title">Sign in</h2>
							<form method="POST" action="" onSubmit={this.handleSubmit} className = "register-form" id="login-form">
								<div className = "form-group">
									<label htmlFor = "uid"><i className = "academe academe-account material-icons-name"></i></label>
									<input placeholder="Enrollment ID" type="text" name="uid" id="uid" value={this.state.uid} onChange={this.handleChange}/>
								</div>
								<div className = "form-group">
									<label htmlFor = "password"><i className = "academe academe-lock"></i></label>
									<input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
								</div>
								<div className = "form-group">
									<input type="checkbox" name="remember-me" id="remember-me" className = "agree-term" />
									<label htmlFor = "remember-me" className = "label-agree-term"><span><span></span></span>Remember me</label>
								</div>
								<div className = "form-group form-button">
									<input type="submit" name="signin" id="signin" className = "form-submit" value="Log in"/>
								</div>
							</form>							
						</div>
					</div>
				</div>
				</section>					
			)
		}		
    }
}

const mapStateToProps = (state) => {
	return {
		user: state.user	
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser: (user) => dispatch(authenticateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
