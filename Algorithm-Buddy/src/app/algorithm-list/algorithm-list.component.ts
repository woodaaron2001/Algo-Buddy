import { Component, OnInit } from '@angular/core';
import { algorithm } from '../algorithm';
import { ALGORITHMS } from '../mock-algorithms';
import { AlgorithmService } from '../algorithm.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-algorithm-list',
  templateUrl: './algorithm-list.component.html',
  styleUrls: ['./algorithm-list.component.scss']
})
export class AlgorithmListComponent implements OnInit {

  category: string = "";
  algoList: algorithm[] = [];

  public algo: algorithm = {
    Id:0,
    Category:"",
    VideoEnd: 0,
    VideoId: "",
    VideoStart: 0, 
    Name: "",
    Moves: "", 
    ImageUrl: "",
    ShortNote:""};

  constructor(
    private route: ActivatedRoute,
    private algorithmService: AlgorithmService,
    private location: Location
  ) {}

  async getAlgorithms(){

    this.algorithmService.getAlgorithmsByCategory(this.category)
    .subscribe(algoList => this.algoList = algoList)
  }

  async ngOnInit(): Promise<void> {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.getAlgorithms()
  }

  goBack(): void{
    this.location.back();
  }
  
}
