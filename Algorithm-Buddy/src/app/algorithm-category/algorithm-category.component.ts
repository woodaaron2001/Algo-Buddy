import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AlgoExplanationComponent } from '../algo-explanation/algo-explanation.component';

@Component({
  selector: 'app-algorithm-category',
  templateUrl: './algorithm-category.component.html',
  styleUrls: ['./algorithm-category.component.scss']
})
export class AlgorithmCategoryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlgoExplanationComponent, {
      width:"90%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}
