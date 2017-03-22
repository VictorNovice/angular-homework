import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search-page.component';
import { CoursesListModule } from './courses-list';
import { ToolboxModule } from './toolbox';

@NgModule({
    declarations: [SearchPageComponent],
    imports: [CoursesListModule, ToolboxModule],
    exports: [SearchPageComponent]
})
export class SearchPageModule {
    constructor() { }
}

