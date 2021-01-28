import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Platform } from 'src/app/models/platform.model';
import { PlatformService } from 'src/app/services/platform.service';
import {map, startWith} from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from 'src/app/services/collection.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
    platform: new FormControl(''),
  });
  platforms: Platform[] = [];
  filteredOptions!: Observable<Platform[]>;
  foundGames:Collection[] = []
  constructor(private platformSvc: PlatformService, private gameSvs: GameService, private collectionSvc:CollectionService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.platformSvc.getPlatforms().subscribe((response: Platform[]) => {
      this.platforms = response;
    });
    this.filteredOptions = this.searchForm.controls.platform.valueChanges
      .pipe(
        startWith(''),
        map((value: Platform) => typeof value === 'string' ? value : value.name),
        map((name: string) => name ? this._filter(name) : this.platforms.slice())
      );
  }


  search() {
    if(this.searchForm.valid){
      this.gameSvs.searchGames(this.searchForm.value.search, this.searchForm.value.platform.platformId).subscribe(response=>{
        this.foundGames = response || []
      }, err=>{
        console.log('err', err);
      })
    }
  }

handleAction(gameId: number){
this.collectionSvc.addItem(gameId).subscribe(response=>{
  this.snackbar.open("Game added to collection", "close", {duration: 3000})
},(err:HttpErrorResponse)=>{
  this.snackbar.open(err.error.text, "close", {duration: 5000})
})
}

  hasError(controlName: string, errorName: string) {
    //check if formcontrol currently has error
    return this.searchForm.controls[controlName].hasError(errorName);
  }

  displayFn(platform: Platform): string {
    return platform?.name ? platform.name : '';
  }

   _filter(name: string): Platform[] {
    const filterValue = name.toLowerCase();

    return this.platforms.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
