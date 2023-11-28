import React, { Component } from 'react'
import StudentService from '../services/StudentService'
import { Link } from 'react-router-dom'

class ListStudentComponent extends Component {
   constructor(props)
   {
         super(props)
         this.state= {
            students:[]
         }
         this.addStudent=this.addStudent.bind(this);
         this.editSurvey=this.editSurvey.bind(this);
   }

componentDidMount(){
    StudentService.getStudents().then((res)=>{
        this.setState({students: res.data});
    });
}

editSurvey(id) {
    this.props.history?.push(`/update-survey/${id}`);
}

addStudent()
{
    this.props.history?.push('/add-survey');
}
    render() {
        return (
            <div>
                <h2 className="text-center">Student's List</h2>
                <div >
                <Link to="/add-survey">
                        <button className='btn btn-primary'>Fill Survey</button>
                </Link>
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                                <th>Telephone</th>
                                <th>Date</th>
                                <th>Liked Options</th>
                                <th>Likelihood to recommend</th>
                                <th>Source of Interest</th>
                                <th>Comments</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key = {student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.streetAddress}</td>
                                        <td>{student.email}</td>
                                        <td>{student.city}</td>
                                        <td>{student.state}</td>
                                        <td>{student.zip}</td>
                                        <td>{student.telephone}</td>
                                        <td>{student.date}</td>
                                        <td>
  {Object.entries(student.likedOptions)
    .filter(([key, value]) => value === true)
    .map(([key]) => key)
    .join(', ')}
</td>
                                        <td>{student.likelihoodToRecommend}</td>
                                        <td>{student.sourceOfInterest}</td>
                                        <td>{student.comments}</td>
                                        <td> <Link to={`/update-survey/${student.id}`}>
                <button className='btn btn-info'>Update</button></Link></td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;