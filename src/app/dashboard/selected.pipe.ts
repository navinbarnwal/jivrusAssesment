import { Component, NgModule, Pipe, PipeTransform } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Pipe({
  name: 'courseFilter'
})

export class SelectedPipe implements PipeTransform {
  transform(courses: any, courseSelected?: any): any {
    console.log('items', courses);
    return courseSelected ? courses.filter(sal => sal.course === courseSelected) : courses;
  }
}
