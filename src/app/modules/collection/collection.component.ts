import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection: Collection[] = []
  constructor(private collectionSvc: CollectionService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.collectionSvc.getCollection().subscribe(collection =>{
      this.collection = collection
    })
  }

handleAction(gameId: number){
  this.collectionSvc.deleteItem(gameId).subscribe((result) => {
        this.refresh();
      },
      (err) => {
        this.snackbar.open('Failed to delete game from collection', 'close', {
          duration: 3000,
        });
      }
    );
}

  refresh(){
    this.collectionSvc.getCollection().subscribe(collection=>{
      this.collection = collection
    })
  }
}
