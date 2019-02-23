export default class Body {
  query;
  constructor(query) {
    this.query = query;
  }

  getJson() {
    return JSON.stringify({
      operationName: null,
      variables: {},
      query: this.query
    });
  }
}
