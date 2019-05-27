import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private apollo: Apollo) {
  }

  public users(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query users {
          users {
            id
            username
            created
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(({data}: any) => (data && data.users) ? data.users : null)
    );
  }
}
