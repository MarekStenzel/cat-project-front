import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/catapi.service';

@Component({
  selector: 'app-adopt-cat',
  templateUrl: './adopt-cat.component.html',
  styleUrls: ['./adopt-cat.component.scss']
})
export class AdoptCatComponent implements OnInit {

  tableOfLonelyCats = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit() {
    this.catApiService.lonelyCats().subscribe(
      data => {
        console.log(data);
        this.tableOfLonelyCats = data;
      }
    );
  }

  imagePath(path: string) {
    if (path) {
      return `http://localhost:3000/photos/${path}`;
    }
  }
}
