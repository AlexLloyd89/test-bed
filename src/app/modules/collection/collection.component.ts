import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection: Collection[] = []
  constructor(private collectionSvc: CollectionService) { }

  ngOnInit(): void {
    this.collectionSvc.getCollection().subscribe(collection =>{
      this.collection = collection
    })
  }

  refresh(){
    this.collectionSvc.getCollection().subscribe(collection=>{
      this.collection = collection
    })
  }
}
