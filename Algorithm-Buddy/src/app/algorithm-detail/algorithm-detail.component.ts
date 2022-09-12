import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../algorithm.service';
import { ActivatedRoute } from '@angular/router';
import { algorithm } from '../algorithm';

@Component({
  selector: 'app-algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.scss']
})
export class AlgorithmDetailComponent implements OnInit {

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

  VideoUrl: string = "https://www.youtube.com/embed/"

  constructor(private route: ActivatedRoute, readonly algorithmService:AlgorithmService) { }

  ngOnInit(): void {
    this.getAlgorithm()
    this.urlFormer()
  }

  getAlgorithm(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.algorithmService.getAlgorithmByName(name).subscribe((data:algorithm) => this.algo = data);

  }

  async urlFormer(): Promise<void>{
    await new Promise(f => setTimeout(f, 800));
    this.VideoUrl += this.algo.VideoId +"?start=" + this.algo.VideoStart +"&end=" + this.algo.VideoEnd + "&showinfo=0&controls=0"
   }

}
