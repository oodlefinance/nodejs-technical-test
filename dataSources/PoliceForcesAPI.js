import { RESTDataSource } from 'apollo-datasource-rest';

class PoliceForcesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://data.police.uk/api/';
  }

  async getAllForces() {
    const result =  await this.get('forces');

    // NB. The API has some usage limits, so we'll only ever return the first 5 to try and avoid them.
    // Unless you're trying to fulfil some extra requirements, we don't expect you to change this :)
    return result.slice(0, 5);
  }

  async getPoliceForce(id) {
    return this.get(`forces/${id}`);
  }
}

export default PoliceForcesAPI;
