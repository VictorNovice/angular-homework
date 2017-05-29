import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputCourseDataModule } from '../shared/input-course-data';

import { CourseCreateComponent } from './course-create.component';

@NgModule({
    declarations: [
        CourseCreateComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputCourseDataModule],
    exports: [
        CourseCreateComponent]
})
export class CourseCreateModule {
    constructor() { }
}
