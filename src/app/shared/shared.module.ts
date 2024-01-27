import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ErrorSnackbarComponent,
    CategoryPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    ErrorSnackbarComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
