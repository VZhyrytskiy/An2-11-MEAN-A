import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule]
})
export class MaterialModule {}
