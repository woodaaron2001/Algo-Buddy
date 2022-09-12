import { Component, OnInit, HostListener, ApplicationRef } from '@angular/core';
import { AlgorithmService } from '../algorithm.service';
import { MOVESET } from '../mock-algorithms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { StackmatDialogComponent } from '../stackmat-dialog/stackmat-dialog.component';


@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService,public dialog: MatDialog,public appRef: ApplicationRef) { }

  
  displayNum: string = "0.0"
  time: number = 0.00;
  interval :any;
  stage: number = 0;
  scramble: string = "SOMETHING"
  finalTime:string = "0";
  something: boolean = false;

  moveset = MOVESET;

  ngOnInit(): void {
    this.time = 0.00;
    this.stage = 0;
    this.getScramble();
  }


  async openDialog(enterAnimationDuration: string, exitAnimationDuration: string): Promise<void>{
    this.dialog.open(StackmatDialogComponent, {
      width:"90%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.something = true;
    this.time = 0;
    
  }

  @HostListener('touchstart', ['$event'])
  handleTouchDown(event: Event){
    switch(this.stage){
      case 0:
        this.startInspection();
        break;
      case 1:

        this.holdStackMat();
        break;
      case 3:
        this.recordTime();
        break;
      case 4:
        this.getNewScramble();
        break;
      case 7:
        this.startInspection();
        break;
      case 8:
        this.getNewScramble();

        break;
      case 9:
        this.getNewScramble();
        break;
    }
  }


  @HostListener('document:keydown',['$event'])
  handleKeyboardDown(event: KeyboardEvent){
    switch(event.key){
      case ' ':
        switch(this.stage){
          case 0:
            this.startInspection();
            break;
          case 1:

            this.holdStackMat();
            break;
          case 3:
            this.recordTime();
            break;
          case 4:
            this.getNewScramble();
            break;
          case 7:
            this.startInspection();
            break;
          case 8:
            this.getNewScramble();

            break;
          case 9:
            this.getNewScramble();
            break;
        }
    }
  }





  @HostListener('document:keyup',['$event'])
  handleKeyboardUp(event: KeyboardEvent){
    switch(event.key){
      case ' ':
        switch(this.stage){
          case 2:
            this.letGoStackMat();
        }
    }
  }

  @HostListener('touchend',['$event'])
  handleTouchUp(event: Event){
        switch(this.stage){
        case 2:
          this.letGoStackMat();
      }
  }




  getScramble(){
    this.algorithmService.getScramble()
    .subscribe(scramble => this.scramble = scramble);
  }

  startInspection(): void{

    this.stage=0;
    this.time=15;
    this.displayNum = this.time.toFixed(2)
    this.stage +=1;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time -= 0.01;
        if(this.time < 0){
          this.time = 0;
        }
        this.displayNum = this.time.toFixed(1)
      } else {
        clearInterval(this.interval);
        if(this.something){
          this.getNewScramble()
          console.log("here")
        }
        else{
          this.stage = 9;
        }

      }
    },10)
  }

  holdStackMat(): void{
    this.stage +=1;
    this.time = 2.00;
    this.displayNum = this.time.toFixed(2)
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time -= 0.01;
        if(this.time < 0){
          this.time = 0;
        }
        this.displayNum = this.time.toFixed(1)
      } 
    },10)
  }

  letGoStackMat(): void{
    if (this.time > 0){
      this.stage = 8;
      clearInterval(this.interval);
    }
    else{
      this.stage =3;
      clearInterval(this.interval);
      this.startTimer();
    }

  }
 
  getNewScramble(): void{
    this.time = 0;
    this.getScramble()
    this.stage = 0;
    this.displayNum = this.time.toFixed(1)
  }
  
  startTimer(): void{
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.time += 0.01;
      this.displayNum = this.time.toFixed(1)
    },10)
  }

  recordTime(): void{
    clearInterval(this.interval);
    this.finalTime = this.time.toFixed(2);
    this.getScramble()
    this.stage = 4;
  }


}
