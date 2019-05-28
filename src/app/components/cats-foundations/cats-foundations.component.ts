import { Component, OnInit } from '@angular/core';
import {CatApiService} from '../../services/catapi.service';

@Component({
  selector: 'app-cats-foundations',
  templateUrl: './cats-foundations.component.html',
  styleUrls: ['./cats-foundations.component.scss']
})
export class CatsFoundationsComponent implements OnInit {

  tableOfFoundations = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit() {
    this.catApiService.foundations().subscribe(
      data => {
        this.tableOfFoundations = data;
      }
    );
  }

}
