import React, { Component } from 'react';
import StudentService from '../services/StudentService'

class UpdateStudentComponent extends Component {

    constructor(props)
   {
         super(props)
         this.state= {
            
            id: this.props.match.params.id, 
            firstName: '',
            lastName: '',
            streetAddress:'',
            email: '',
            city : '',
            state: '',
            zip : '',
            telephone :'',
            date:'',
            likedOptions:[],
            likelihoodToRecommend: 'Very Likely',
            sourceOfInterest:'',
            comments:'',
            actions:''



            
         }

         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.changeCityHandler = this.changeCityHandler.bind(this);
         this.changeCommentsHandler = this.changeCommentsHandler.bind(this);
         this.changeDateHandler = this.changeDateHandler.bind(this);
         this.changeEmailHandler = this.changeEmailHandler.bind(this);
         this.changeHearAboutHandler = this.changeHearAboutHandler.bind(this);
         this.changeLikedOptionsHandler = this.changeLikedOptionsHandler.bind(this);
         this.changeStateHandler = this.changeStateHandler.bind(this);
         this.changeStreetAddressHandler = this.changeStreetAddressHandler.bind(this);
         this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
         this.changeZipHandler = this.changeZipHandler.bind(this);
         this.updateSurvey = this.updateSurvey.bind(this);
        

   }
 
   componentDidMount(){
    const { id } = this.props.match.params;
     StudentService.getStudentById(id).then((res)=>{
          let student = res.data;
          this.setState({firstName: student.firstName, lastName:student.lastName, streetAddress: student.streetAddress, zip: student.zip ,city: student.city, state :student.state,
            telephone: student.telephone, email: student.email, date: student.date ,likedOptions: student.likedOptions, sourceOfInterest:student.sourceOfInterest, comments:student.comments, likelihoodToRecommend:student.likelihoodToRecommend})
     })
   }


   updateSurvey=(e) => {
    e.preventDefault();
    let student = {firstName: this.state.firstName, lastName:this.state.lastName, streetAddress: this.state.streetAddress, zip: this.state.zip ,city: this.state.city, state :this.state.state,
      telephone: this.state.telephone, email: this.state.email, date: this.state.date ,likedOptions: this.state.likedOptions, sourceOfInterest:this.state.sourceOfInterest, comments: this.state.comments, likelihoodToRecommend:this.state.likelihoodToRecommend}
      console.log('student => ' + JSON.stringify(student));
      StudentService.updateStudent(this.state.id, student)
      .then((res) => {
        console.log('Student updated successfully:', res.data);
        // Redirect to the list view or perform any other action you want
        this.props.history?.push('/surveys');
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        // Handle the error, show a message, or perform any other action
      });
   }

   changeFirstNameHandler=(event) =>{
    this.setState({firstName: event.target.value});
   }

   changeLastNameHandler=(event) =>{
    this.setState({lastName: event.target.value})
   }

   changeStreetAddressHandler=(event) => {
    this.setState({streetAddress: event.target.value})
   }

   changeZipHandler=(event) => {
    this.setState({zip: event.target.value})
   }

   changeCityHandler=(event) => {
    this.setState({city: event.target.value})
   }
   
   changeStateHandler=(event) => {
    this.setState({state: event.target.value})
   }

   changeTelephoneHandler=(event) => {
    this.setState({telephone: event.target.value})
   }

   changeRecommendationHandler = (event) => {
    this.setState({ likelihoodToRecommend: event.target.value });
  }
   changeEmailHandler=(event) => {
    this.setState({email: event.target.value})
   }

   changeDateHandler=(event) => {
    this.setState({date: event.target.value})
   }

   changeLikedOptionsHandler = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    this.setState((prevState) => {
      if (isChecked) {
        return { likedOptions: { ...prevState.likedOptions, [value]: true } };
      } else {
        const updatedLikedOptions = { ...prevState.likedOptions };
        delete updatedLikedOptions[value];
        return { likedOptions: updatedLikedOptions };
      }
    });
  }
  changeCommentsHandler = (event) => {
    this.setState({ comments: event.target.value });
  }
   
  changeHearAboutHandler = (event) => {
    this.setState({ sourceOfInterest: event.target.value });
  }

  cancel(){
    this.props.history?.push('/surveys');
  }

    render() {
        return (
            <div className="container mt-5" id="survey">
      <div className="header-box mb-5">
        <h1 className="text-center">CS Department Survey</h1>
      </div>
      <form action="" method="get">
        <div className="mb-1">
          <label htmlFor="firstName" className="form-label h5 required-label"
            >First Name:</label
          >
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            className="form-control short-input"
            autoComplete="on"
            value = {this.state.firstName} 
            onChange={this.changeFirstNameHandler}
            autoFocus
          /><br />
        </div>
        <div className="mb-1">
          <label htmlFor="lastName" className="form-label h5 required-label"
            >Last Name:</label
          >
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            className="form-control short-input"
            autoComplete="on"
            value = {this.state.lastName}
            onChange={this.changeLastNameHandler}
            autoFocus
          /><br />
        </div>

        <div className="mb-1">
          <label htmlFor="Address" className="form-label h5 required-label"
            >Street Address Line 1:</label
          >
          <input
            type="text"
            id="Address"
            name="Address"
            required
            className="form-control short-input"
            autoComplete="on"
            value = {this.state.streetAddress} 
            onChange={this.changeStreetAddressHandler}
          /><br />
        </div>


        <div className="mb-1">
          <label htmlFor="zipcode" className="form-label h5 required-label"
            >Zipcode:</label
          >
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            required
            className="form-control short-input"
            placeholder="eg: 22030"
            autoComplete="on"
            value = {this.state.zip} 
            onChange={this.changeZipHandler}
          />
        </div>

        <br />
        <div className="mb-1">
        <label htmlFor="city" className="form-label h5 required-label">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          className="form-control short-input"
          placeholder="eg: Fairfax"
          autoComplete="on"
          value = {this.state.city} 
          onChange={this.changeCityHandler}
        /><br />
      </div>

      <div className="mb-1">
        <label htmlFor="state" className="form-label h5 required-label">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          required
          className="form-control short-input"
          placeholder="eg: VA"
          autoComplete="on"
          value = {this.state.state} 
          onChange={this.changeStateHandler}
        /><br />
      </div>

        <br />

        <div className="mb-1">
          <label htmlFor="telephone" className="form-label h5 required-label"
            >Telephone:</label
          >
          <input
            type="text"
            id="telephone"
            name="telephone"
            required
            className="form-control short-input"
            placeholder="XXX-XXX-XXXX"
            autoComplete="on"
            value = {this.state.telephone} 
            onChange={this.changeTelephoneHandler}
          /><br />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="form-label h5 required-label">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="form-control short-input"
            placeholder="eg: xxx@xx.xxx"
            autoComplete="on"
            value = {this.state.email} 
            onChange={this.changeEmailHandler}
          /><br />
        </div>

        <div className="mb-1">
          <label htmlFor="date" className="form-label h5 required-label"
            >Date of Survey:</label
          >
          <input
            type="date"
            id="date"
            name="date"
            required
            className="form-control short-input"
            autoComplete="on"
            value = {this.state.date} 
            onChange={this.changeDateHandler}
          /><br />
        </div>
        <div className="mb-1">
          <label className="form-label h5 required-label" htmlFor="liked_students"
            >What did you like most about the campus?</label
          >
        </div>

        <div className="mb-3">
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="liked_students"
      name="liked[]"
      value="Students"
      checked={this.state.likedOptions['Students']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="liked_students">Students</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
      className="form-check-input"
      type="checkbox"
      id="liked_location"
      name="liked[]"
      value="location"
      checked={this.state.likedOptions['location']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="liked_location">Location</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
      className="form-check-input"
      type="checkbox"
      id="liked_Campus"
      name="liked[]"
      value="Campus"
      checked={this.state.likedOptions['Campus']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="liked_Campus">Campus</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
      className="form-check-input"
      type="checkbox"
      id="liked_Atmosphere"
      name="liked[]"
      value="Atmosphere"
      checked={this.state.likedOptions['Atmosphere']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="liked_Atmosphere">Atmosphere</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
      className="form-check-input"
      type="checkbox"
      id="dorms"
      name="liked[]"
      value="dorms"
      checked={this.state.likedOptions['dorms']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="dorms">Dorm Rooms</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
      className="form-check-input"
      type="checkbox"
      id="liked_sports"
      name="liked[]"
      value="Sports"
      checked={this.state.likedOptions['Sports']}
      onChange={this.changeLikedOptionsHandler}
    />
    <label className="form-check-label h6" htmlFor="liked_sports">Sports</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
</div>


        <div className="mb-3">
          <label className="form-label h5 required-label" htmlFor="friends"
            >How did you hear about us?</label
          >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="friends"
              name="hear_about"
              value="friends"
              checked={this.state.sourceOfInterest === 'friends'}
              onChange={this.changeHearAboutHandler}
            />
            <label className="form-check-label h6" htmlFor="friends">Friends</label
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="form-check-input"
              type="radio"
              id="relatives"
              name="hear_about"
              value="relatives"
              checked={this.state.sourceOfInterest === 'relatives'}
              onChange={this.changeHearAboutHandler}
            />
            <label className="form-check-label h6" htmlFor="relatives">Relatives</label
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="form-check-input"
              type="radio"
              id="internet"
              name="hear_about"
              value="internet"
              checked={this.state.sourceOfInterest === 'internet'}
              onChange={this.changeHearAboutHandler}
            />
            <label className="form-check-label h6" htmlFor="internet">Internet</label
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="form-check-input"
              type="radio"
              id="television"
              name="hear_about"
              value="television"
              checked={this.state.sourceOfInterest === 'television'}
              onChange={this.changeHearAboutHandler}
            />
            <label className="form-check-label h6" htmlFor="television"
              >Television</label
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comments" className="form-label h5"
            >Additional Comments:</label
          >
          <textarea
            id="comments"
            name="comments"
            rows="4"
            className="form-control short-input"
            value={this.state.comments}
            onChange={this.changeCommentsHandler}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="recommendation" className="form-label h5 required-label"  id="recommendation"
           name="likelihoodToRecommend" 
            >Likelihood of Recommending:</label>
          <select
          className="form-select"
          value={this.state.likelihoodToRecommend}
          onChange={this.changeRecommendationHandler}>
          <option value="very_likely">Very Likely</option>
          <option value="likely">Likely</option>
          <option value="unlikely">Unlikely</option>
          </select>

        </div>
        <button type="submit" className="btn btn-primary mt-3 custom-button" onClick={this.updateSurvey}>
          Submit
        </button>
        <button type="reset" className="btn btn-secondary mt-3 custom-button" onClick={this.cancel.bind(this)}>
          Reset
        </button>
      </form>
    </div>
 
        );
    }
}



export default UpdateStudentComponent;