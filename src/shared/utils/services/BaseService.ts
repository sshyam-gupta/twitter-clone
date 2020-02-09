import axios from 'axios'
import _ from 'lodash'

/**
 * A Base service with ready to use Ajax methods
 *
 * @export
 * @class BaseService
 */
export default class BaseService {
  baseUrl: string;

  constructor(baseUrl = "/") {
    this.baseUrl = baseUrl;
  }

  request({ path, method = 'GET', params = {}, data = {}, headers = {
    "authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
    "Content-Type": "application/json"
  } }: any) {
    const url = this.baseUrl + path;
    return axios({
      url,
      baseURL: this.baseUrl,
      method,
      params,
      data,
      headers
    })
      .then(_.property('data'))
      .catch(err => {
        const code = _.get(err, 'response.status', '');
        const msg = _.get(err, 'response.data.error') || 'Server error';

        throw new Error(`${code} ${msg}`);
      })
  }

  async GET(path: string, params?: any, headers?: any): Promise<any> {
    return this.request({
      path,
      params,
      headers,
      method: 'GET',
    });
  }

  async POST(path: string, body?: any, headers?: any) {
    return this.request({
      path,
      headers,
      data: body,
      method: 'POST'
    });
  }

  async PUT(path: string, body?: any, headers?: any) {
    return this.request({
      path,
      headers,
      data: body,
      method: 'PUT'
    });
  }

  async DELETE(path: string, params?: any, headers?: any) {
    return this.request({
      path,
      params,
      headers,
      method: 'DELETE',
    });
  }

}