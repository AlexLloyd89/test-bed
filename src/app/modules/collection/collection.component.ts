import { HttpErrorResponse } from '@angular/common/http';
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
  loading: boolean = false;
  constructor(private collectionSvc: CollectionService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true
    this.collectionSvc.getCollection().subscribe(collection =>{
      this.loading = false
      this.collection = collection
    }, (err: HttpErrorResponse)=>{
      this.loading = false
      this.snackbar.open(err.error.text, 'close', { duration: 5000 });
    })
  }

handleAction(gameId: number){
  this.loading = true;
  this.collectionSvc.deleteItem(gameId).subscribe((result) => {
        this.refresh();
      },
      (err: HttpErrorResponse) => {
        this.loading = false
        this.snackbar.open(err.error.text, 'close', { duration: 5000 });
      }
    );
}

  refresh(){
    this.collectionSvc.getCollection().subscribe(collection=>{
      this.loading = false
      this.collection = collection
    })
  }
}
