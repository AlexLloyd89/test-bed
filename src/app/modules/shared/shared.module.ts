import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { MaterialModule } from '../material/material.module';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [TruncatePipe, DetailsDialogComponent, GameCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TruncatePipe, GameCardComponent]
})
export class SharedModule { }
