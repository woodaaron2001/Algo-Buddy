import { Component, OnInit } from '@angular/core';
import { algorithm } from '../algorithm';
import { AlgorithmService } from '../algorithm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(readonly algorithmService: AlgorithmService) { }
    randOLL: string = ""
    randPLL: string = ""

  ngOnInit(): void {
    this.algorithmService.getRandomOLL().subscribe((data:algorithm) => this.randOLL = data.Name)
    this.algorithmService.getRandomPLL().subscribe((data:algorithm) => this.randPLL = data.Name)
  }
  
}
