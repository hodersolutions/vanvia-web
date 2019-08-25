import React, { Component } from 'react';

class CreateStudent extends Component {
  render() {
    return (
        <div className="container-fluid">            
            <form action="">
                <div className="row row-gap">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName" className="academe-form-label">First name *</label>
                            <input type="text" className="academe-input-text" id="firstName" required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="lastName" className="academe-form-label">Last name *</label>
                            <input type="text" className="academe-input-text" id="lastName" required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="genderSelect" className="academe-form-label">Gender *</label>
                            <select className="academe-input-text" id="genderSelect" required>
                                <option value="select" className="option">Please Select Gender*</option>
                                <option className="option">Male</option>
                                <option className="option">Female</option>
                                <option className="option">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="dob" className="academe-form-label">Date Of Birth *</label>
                            <input type="date" className="academe-date" id="dob" required/>
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="rollNo" className="academe-form-label">Roll</label>
                            <input type="text" className="academe-input-text" id="rollNo" required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="genderSelect" className="academe-form-label">Blood Group *</label>
                            <select className="academe-input-text" id="genderSelect" required>
                                <option value="select" className="option">Please Select Blood Group*</option>
                                <option className="option">Male</option>
                                <option className="option">Female</option>
                                <option className="option">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="religionSelect" className="academe-form-label">Religion *</label>
                            <select className="academe-input-text" id="religionSelect" required>
                                <option value="select" className="option">Please Select Religion*</option>
                                <option className="option">1</option>
                                <option className="option">2</option>
                                <option className="option">3</option>
                                <option className="option">4</option>
                                <option className="option">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="emailId" className="academe-form-label">Email</label>
                            <input type="email" className="academe-email" id="emailId" required="False"/>
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="genderSelect" className="academe-form-label">Class *</label>
                            <select className="academe-input-text" id="genderSelect" required>
                                <option value="select" className="option">Please Select Class*</option>
                                <option value="male" className="option">Male</option>
                                <option value="female" className="option">Female</option>
                                <option value="others" className="option">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="genderSelect" className="academe-form-label">Section *</label>
                            <select className="academe-input-text" id="genderSelect" required>
                                <option value="select" className="option">Please Select Section*</option>
                                <option className="option">Male</option>
                                <option className="option">Female</option>
                                <option className="option">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="admissionId" className="academe-form-label">AddmissionID</label>
                            <input type="text" className="academe-input-text" id="admissionId"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="form-control" className="academe-form-label">Phone</label>
                            <input type="text" className="academe-input-text" id="phoneNo" />
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="shortBio" className="academe-form-label">Short BIO</label>
                            <textarea className="academe-textarea" name="" id="shortBio" rows="7"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="photo" className="academe-form-label">Upload Student Photo(150px X 150px):</label>
                            <input type="file" id="photo" className="academe-form-file" required/>
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    <div className="col-md-6">
                        <button type="submit" className="academe-btn-success">Save</button>
                        <button type="reset" className="academe-btn-basic">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default CreateStudent;