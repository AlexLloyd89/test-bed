import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  loading: boolean = false;

  constructor(private gameSvc: GameService, @Inject(MAT_DIALOG_DATA) public data: DetailsDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true
    this.gameSvc.getGameDetail(this.data.gameId).subscribe(response=>{
      this.game = response
      this.loading  = false
    },(err: HttpErrorResponse) => {
      this.loading = false
      this.snackbar.open(err.error.text, 'close', { duration: 5000 });
    })
  }

}
