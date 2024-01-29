import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: result => {
        this.onSuccess();
      },
      error: error => this.snackBar.open('Erro ao salvar curso', 'Fechar', { duration: 5000 }),
    });
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this.snackBar.open('Curso salvo com sucesso', '', { duration: 5000 });
    this.onCancel();
  }
}
