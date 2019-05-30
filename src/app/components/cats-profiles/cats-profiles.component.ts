import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/catapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cats-profiles',
  templateUrl: './cats-profiles.component.html',
  styleUrls: ['./cats-profiles.component.scss']
})
export class CatsProfilesComponent implements OnInit {

  tableOfCats = [];
  catWidth: string;
  catHeight: string;

  url: string;

  constructor(private catApiService: CatApiService,
              private authService: AuthService,
              private httpClient: HttpClient) {}

  ngOnInit() {
    this.catApiService.cats().subscribe(
      data => {
        console.log(data);
        this.tableOfCats = data;
      }
    );
  }

  imagePath(path: string) {
    if (path) {
      return `http://localhost:3000/photos/${path}`;
    }
  }

  // uploadImage(file, catId) {
  //   const formData = new FormData();
  //   formData.append('image', '/home/marek/Pulpit/dzikikot.jpg');
  //   let headers: HttpHeaders = new HttpHeaders();
  //   headers = headers.append('Authorization', `Bearer ${this.authService.userToken}`);
  //   headers = headers.append('Content-Type', 'multipart/form-data');
  //   headers = headers.append('Cache-Control', 'no-cache');
  //   return this.httpClient.post(
  //     `http://localhost:3000/photos/create/cat/${catId}`,
  //     formData,
  //     {headers}).subscribe((response) => console.log(response));
  // }
  //
  // onSelectFile(event, catId) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     console.log(catId);
  //     this.uploadImage(event.target.files[0], catId);
  //   }
  // }
}
