import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class GraphqlConnectionService {

  constructor(private apollo: Apollo,
              private httpLink: HttpLink) { }

  establishConnections(): void {
    this.connectToServer();
  }

  private connectToServer() {
    this.apollo.create({
      link: this.httpLink.create({uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache({
          addTypename: false
        }
      ),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        }
      }
    });
  }
}
