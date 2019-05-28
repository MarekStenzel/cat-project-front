import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/catapi.service';

@Component({
  selector: 'app-cats-profiles',
  templateUrl: './cats-profiles.component.html',
  styleUrls: ['./cats-profiles.component.scss']
})
export class CatsProfilesComponent implements OnInit {

  tableOfCats = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit() {
    this.catApiService.cats().subscribe(
      data => {
        this.tableOfCats = data;
      }
    );
  }

}
