import { Component } from '@angular/core';
import { AlgoExplanationComponent } from './algo-explanation/algo-explanation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Algorithm-Buddy';

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlgoExplanationComponent, {
      width:"90%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
