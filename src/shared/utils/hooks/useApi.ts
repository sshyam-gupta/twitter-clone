import { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import _ from 'lodash'
/**
 * Custom react hook for fetching API data
 *
 * It combines useState and useEffect to return :
 *  - The expected data
 *  - A loading status
 *  - An error value
 *  - A retry method
 *
 * @export
 * @param {String} method
 * @param {any[]} params
 */
export function useAPI(method: string, ...params: any) {
  // ---- Hooks
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, onError] = useState<any>(null);

  // ---- API
  const fetchData = async () => {
    onError(null);
    try {
      setIsLoading(true);
      // @ts-ignore
      setData(await ApiService[method](...params));
    } catch (ex) {
      onError(wrapException(ex));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);

  return [data, isLoading, error, fetchData];
}

export function wrapException(err: any) {
  if (err instanceof Error) {
    return err;
  }

  let message = err.message
    || _.get(err, 'response.data.error')
    || 'SOMETHING WENT WRONG';

  return new Error(message);
}
