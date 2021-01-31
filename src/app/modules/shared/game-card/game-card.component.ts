import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Collection } from 'src/app/models/collection.model';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() game!: Collection;
  @Input() searchCard!: boolean;
  @Output() emitAction = new EventEmitter()
  hoveredCard: boolean = false

  constructor(private dialog: MatDialog) {}


  action(gameId: number) {
    this.emitAction.emit(gameId)
  }

  viewDetails(gameId: number) {
    this.dialog.open(DetailsDialogComponent, {
      panelClass: 'details-dialog',
      data: { gameId },
    });
  }
}
