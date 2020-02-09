import _ from 'lodash';
import BaseService from './BaseService';

const buildCacheKey = (obj: any) => {
  return _.map(obj, (val, key) => `${key}=${val}`).join('&');
};

/**
 * Cached JSON Service
 * All the GET responses are saved indefinitely
 *
 * @class CachedJsonService
 * @extends {JsonService}
 */
class CachedJsonService extends BaseService {
  _cache: any;

  constructor(props: any) {
    super(props);
    this._cache = {};
  }

  async GET(path: string, params?: any, headers?: any): Promise<any> {
    const cacheKey = path + '?' + buildCacheKey(params);

    if (!this._cache[cacheKey]) {
      this._cache[cacheKey] = await super.GET(path, params, headers);
    }
    return this._cache[cacheKey];
  }
}

export default CachedJsonService;