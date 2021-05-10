import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DataServiceService} from '../data-service.service';
import {finalize} from 'rxjs/operators';
import {FormBuilder, Validators} from '@angular/forms';

export interface Coursedata {
  course: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courseDatacIn;
  studentDataIn;
  addCourseButtonActivate = false;
  addStudentButtonActivate = false;
  courseForm = this.fb.group({
    courseName: ['']
  });
  studentForm = this.fb.group({
    courseName: ['', Validators.required],
    studentName: ['']
  });

  addCourseInput: string;
  courseSelected = '';
  studentSelected;
  setCourse = this.courseSelected;

  constructor(private courseDataService: DataServiceService,
              private fb: FormBuilder) {
    this.courseDataService.getCourseData().valueChanges().subscribe(
      data => {
        this.courseDatacIn = data;
        console.log(this.courseDatacIn);
      }
    );
    this.courseDataService.getStudentData().valueChanges().subscribe(
      data => {
        this.studentDataIn = data;
        console.log(this.studentDataIn);
      });
  }

  ngOnInit(): void {

  }


  addcourseButton() {
    this.addCourseButtonActivate = true;
  }

  addStudentButton() {
    this.addStudentButtonActivate = true;
  }

  appendCourse() {
    if (this.courseForm.controls.courseName.value !== null){
     this.courseDataService.appendCourse(this.courseForm.controls.courseName.value);
    }

  }

  appendStudent() {
    if (this.studentForm.controls.studentName.value != null){
      this.courseDataService.appendStudentName(this.courseSelected, this.studentForm.controls.studentName.value );
    }
  }

  resetData() {
    this.courseDataService.resetData();
  }

  changeCourse() {
    this.courseForm.controls.courseName.setValue(this.setCourse);
    this.studentForm.controls.studentName.setValue('');

    console.log(this.courseSelected);
  }

  changeStudent() {
    this.studentForm.controls.studentName.setValue(this.studentSelected);
    console.log(this.studentSelected);
  }
}
