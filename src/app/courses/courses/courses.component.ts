import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend' },
    { _id: '2', name: 'React', category: 'Frontend' },
    { _id: '3', name: 'Vue', category: 'Frontend' },
    { _id: '4', name: 'Node', category: 'Backend' },
  ];
  displayedColumns: string[] = ['name', 'category'];
}
