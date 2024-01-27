import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: result => {
        console.log(result);
      },
      error: error => this.snackBar.open('Erro ao salvar curso', 'Fechar', { duration: 5000 }),
    });
  }

  onCancel() {
  }
}
