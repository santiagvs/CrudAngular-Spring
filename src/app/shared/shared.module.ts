import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ErrorSnackbarComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    ErrorSnackbarComponent
  ]
})
export class SharedModule { }
