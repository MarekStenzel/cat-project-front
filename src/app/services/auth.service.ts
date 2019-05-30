import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable()
export class AuthService {

  isAuthenticated: boolean;
  userToken: string;

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

  public login(username, password): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            user {
              id
              username
              created
            }
            token
          }
        }
      `,
        variables: {username, password}
      })
      .pipe(
        map(res => {
          return (res.data && res.data.login) ? res.data.login : null;
        })
      );
  }

  public register(username, password): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation register($username: String!, $password: String!) {
          register(username: $username, password: $password) {
            user {
              id
              username
              created
            }
            token
          }
        }
      `,
      variables: {username, password}
    })
      .pipe(
        map(res => {
          return (res.data && res.data.login) ? res.data.login : null;
        })
      );
  }

}
