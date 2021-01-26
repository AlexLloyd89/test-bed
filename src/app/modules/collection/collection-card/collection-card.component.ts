import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from 'src/app/services/collection.service';
import { DetailsDialogComponent } from '../../shared/details-dialog/details-dialog.component';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() game!: Collection;
  @Output() emitDelete = new EventEmitter()
  hoveredCard: boolean = false
  constructor(private collectionSvc: CollectionService, private snackbar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit(): void {}

  delete(gameId: number){
    this.collectionSvc.deleteItem(gameId).subscribe(result=>{
      this.emitDelete.emit('success')
    },err=>{
      this.snackbar.open("Failed to delete game from collection", "close", {duration: 3000})
    })
  }

  viewDetails(gameId: number){
    this.dialog.open(DetailsDialogComponent, {
      panelClass:'details-dialog',
      data:{ gameId }
    })
  }

}
