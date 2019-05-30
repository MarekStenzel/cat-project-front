import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable()
export class CatApiService {

  constructor(private http: HttpClient,
              private apollo: Apollo) {
  }

  public cats(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query cats {
          cats {
            id
            user {
              id
              username
            }
            name
            photos {
              filename
            }
            lonely
            popularity
            created
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(({data}: any) => (data && data.cats) ? data.cats : null)
      );
  }

  public lonelyCats(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query lonelyCats {
          lonelyCats {
            id
            user {
              id
              username
            }
            name
            photos {
              filename
            }
            lonely
            popularity
            created
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(({data}: any) => (data && data.lonelyCats) ? data.lonelyCats : null)
      );
  }


  public memes(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query memes {
          memes {
            id
            user {
              id
              username
            }
            created
            popularity
            name
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(({data}: any) => (data && data.memes) ? data.memes : null)
      );
  }

  public foundations(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query foundations {
          foundations {
            id
            name
            email
            address {
              addr1
              addr2
              city
              state
              country
            }
            created
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(({data}: any) => (data && data.foundations) ? data.foundations : null)
      );
  }

  // public login(username, password): Observable<any> {
  //   return this.apollo.mutate<any>({
  //     mutation: gql`
  //       mutation login($username: String!, $password: String!) {
  //         login(username: $username, password: $password) {
  //           user {
  //             id
  //             username
  //             created
  //           }
  //           token
  //         }
  //       }
  //     `,
  //     variables: {username, password}
  //   })
  //     .pipe(
  //       map(res => {
  //         return (res.data && res.data.login) ? res.data.login : null;
  //       })
  //     );
  // }

}
