import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TruncatePipe, DetailsDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TruncatePipe]
})
export class SharedModule { }
