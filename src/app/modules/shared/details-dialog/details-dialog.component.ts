import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameDetail } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

interface DetailsDialog {
  gameId: number
}

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {
  game!: GameDetail
  constructor(private gameSvc: GameService,@Inject(MAT_DIALOG_DATA) public data: DetailsDialog) { }

  ngOnInit(): void {
    this.gameSvc.getGameDetail(this.data.gameId).subscribe(response=>{
      this.game = response
    })
  }

}
