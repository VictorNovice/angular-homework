import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListItemModule } from  './list-item';

import { CoursesListComponent } from './courses-list.component';
import { NoDataMessageComponent } from  './no-data-message/no-data-message.component';

@NgModule({
    declarations: [
        CoursesListComponent,
        NoDataMessageComponent
        ],
    imports: [CourseListItemModule, CommonModule],
    exports: [CoursesListComponent]
})
export class CoursesListModule {
    constructor() { }
}
