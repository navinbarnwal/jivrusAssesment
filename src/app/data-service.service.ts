import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  courseData: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  appendCourse(courseDataForm){
    this.courseData = this.firebase.list('/jivrusAssesment/courses');
    const data = { course: courseDataForm};

    this.courseData.push(data);
  }

  appendStudentName(courseName, studentName){
    this.courseData = this.firebase.list('/jivrusAssesment/students' );
    const data = { course: courseName, student: studentName};
    this.courseData.push(data );
  }
  getCourseData(){
    return this.firebase.list('/jivrusAssesment/courses');
  }
  getStudentData(){
    return this.firebase.list('/jivrusAssesment/students');
  }
  resetData(){
    return this.firebase.database.ref('jivrusAssesment').remove();
  }
}
