import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DataServiceService} from '../data-service.service';
import {finalize} from 'rxjs/operators';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  studentData = [
    {course: 'Ina'},
    {course: 'Mina'},
    {course: 'Dica'}
  ];
  courseForm = this.fb.group({
    courseName: ['']
  });
  studentForm = this.fb.group({
    courseName: ['', Validators.required],
    studentName: ['']
  });
  allData: any;
  addCourseInput: string;
  courseSelected = '';

  constructor(private courseData: DataServiceService,
              private fb: FormBuilder) {
    this.courseData.getData().valueChanges().subscribe(
      data => {
        this.allData = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {

  }


  addcourseButton() {

  }

  addStudentButton() {

  }

  appendCourse() {
    if (this.courseForm.controls.courseName.value !== null){
     this.courseData.appendCourse(this.courseForm.controls.courseName.value);
    }

  }

  appendStudent() {
    if (this.studentForm.controls.studentName.value != null){
      this.courseData.appendStudentName(this.courseSelected, this.studentForm.controls.studentName.value );
    }
  }

  resetData() {
    this.courseData.resetData();
  }
}
