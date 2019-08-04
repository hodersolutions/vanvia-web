import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/userActions';

class Register extends Component {	
    constructor() {
		super();
		this.state = {
			email: '',
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
		this.props.createUser({
			email: this.state.email,
			password: this.state.password
		});
	}
    render() {				
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/'/>;
		}
		else {			
			return (
				<section className="signup">
					<div className="container">
						<div className="signup-content">
							<div className="signup-form">
								<h2 className="form-title">Join us</h2>
								<form method="POST" className="register-form" id="register-form">
									<div className="form-group">
										<label htmlFor="name"><i className="vanvia vanvia-account material-icons-name"></i></label>
										<input type="text" name="name" id="name" placeholder="Your Name"/>
									</div>
									<div className="form-group">
										<label htmlFor="email"><i className="vanvia vanvia-email"></i></label>
										<input type="email" name="email" id="email" placeholder="Your Email"/>
									</div>
									<div className="form-group">
										<label htmlFor="pass"><i className="vanvia vanvia-lock"></i></label>
										<input type="password" name="pass" id="pass" placeholder="Password"/>
									</div>
									<div className="form-group">
										<label htmlFor="re-pass"><i className="vanvia vanvia-lock-outline"></i></label>
										<input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
									</div>
									<div className="form-group">
										<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
										<label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="/" className="term-service">Terms of service</a></label>
									</div>
									<div className="form-group form-button">
										<input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
									</div>
								</form>
							</div>
							<div className="signup-image">
								<figure><img src="images/signup-image.PNG" alt="Register"/></figure>
								<a href="/signin" className="signup-image-link">I am already member</a>
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
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
