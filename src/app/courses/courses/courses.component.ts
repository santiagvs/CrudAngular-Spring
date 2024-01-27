import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from 'src/app/shared/components/error-snackbar/error-snackbar.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public snackbar: MatSnackBar
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError(error.message);
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.snackbar.openFromComponent(ErrorSnackbarComponent, {
      data: errorMsg,
      duration: 5000,
    });
  }
}
