 import axios from 'axios';

 const STUDENT_API_BASE_URL='http://localhost:8080/api/v1/surveys'
 const STUDENT_API_BASE_URL_POST='http://localhost:8080/api/v1/survey'

 class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student) {
        return axios.post(STUDENT_API_BASE_URL_POST, student);
    }
    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

 }

 const instance = new StudentService();
 export default instance