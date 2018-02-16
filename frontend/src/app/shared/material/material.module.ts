import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule]
})
export class MaterialModule {}
