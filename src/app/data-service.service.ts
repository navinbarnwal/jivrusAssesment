import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  courseData: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  appendCourse(courseDataForm){
    this.courseData = this.firebase.list('/jivrusAssesment/' + courseDataForm);
    this.courseData.push('');
  }

  appendStudentName(courseName, studentName){
    this.courseData = this.firebase.list('/jivrusAssesment/' + courseName + '/' + studentName);
    this.courseData.push('');
  }
  getData(){
    return this.firebase.list('/');
  }
  resetData(){
    return this.firebase.database.ref('jivrusAssesment').remove();
  }
}
