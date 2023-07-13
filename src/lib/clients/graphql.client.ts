import { GraphQLClient as GQLC } from 'graphql-request';

export interface GraphQLClient {
  request(
    query: string,
    variables?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<any>;
}

export class GraphQLRequestClient implements GraphQLClient {
  private client: GQLC;

  constructor(url: string) {
    this.client = new GQLC(url);
  }

  request(
    query: string,
    variables?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<any> {
    return this.client.request(query, variables, headers);
  }
}

export default GraphQLRequestClient;
