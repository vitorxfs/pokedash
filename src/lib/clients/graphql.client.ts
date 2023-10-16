import { GraphQLClient as GQLC } from 'graphql-request';

export interface GraphQLClient {
  request(
    url: string,
    query: string,
    variables?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<any>;
}

export class GraphQLRequestClient implements GraphQLClient {
  request(
    url: string,
    query: string,
    variables?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<any> {
    const client = new GQLC(url);

    return client.request(query, variables, headers);
  }
}

export default GraphQLRequestClient;
