import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/catapi.service';

@Component({
  selector: 'app-cats-memes',
  templateUrl: './cats-memes.component.html',
  styleUrls: ['./cats-memes.component.scss']
})
export class CatsMemesComponent implements OnInit {

  tableOfMemes = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit() {
    this.catApiService.memes().subscribe(
      data => {
        this.tableOfMemes = data;
      }
    );
  }
}
