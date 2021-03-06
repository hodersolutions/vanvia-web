import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/userActions';

class Register extends Component {	
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
		this.props.registerUser({
			uid: this.state.uid,
			password: this.state.password
		});
	}
    render() {				
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/'/>;
		}
		else if(this.props.user.response_status === "success") {
			return <Redirect to='/signin'/>;
		}
		else {			
			return (
				<section className="signup">
					<div className="container">
						<div className="signup-content">
							<div className="signup-form">
								<h2 className="form-title">Enroll with us</h2>
								<form method="POST" onSubmit={this.handleSubmit} className="register-form" id="register-form">									
									<div className="form-group">
										<label htmlFor="uid"><i className="academe academe-uid"></i></label>
										<input type="text" name="uid" id="uid" placeholder="Enrollment ID" value={this.state.uid} onChange={this.handleChange}/>
									</div>
									<div className="form-group">
										<label htmlFor="pass"><i className="academe academe-lock"></i></label>
										<input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
									</div>
									<div className="form-group">
										<label htmlFor="re-pass"><i className="academe academe-lock-outline"></i></label>
										<input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
									</div>
									<div className="form-group">
										<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
										<label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="/" className="term-service">Terms of service</Link></label>
									</div>
									<div className="form-group form-button">
										<input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
									</div>
								</form>
							</div>
							<div className="signup-image">
								<figure><img src="images/signup-image.PNG" alt="Register"/></figure>
								<Link to="/signin" className="signup-image-link">I am already member</Link>
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
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
