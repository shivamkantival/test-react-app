//constants
import { BASE_API_DOMAIN, EMPTY_OBJECT_READONLY } from 'config/constants';

//utils
import qs from 'query-string';

type ReqObj = {
  method: 'GET';
  query: object;
};

async function checkStatus<R>(response: Response): Promise<R> {
  if (response.status >= 200 && response.status < 300) {
    const clonedResponse = response.clone();
    return clonedResponse.json();
  } else {
    throw response;
  }
}

async function makeCall<R>(url: string, reqObj: ReqObj): Promise<R> {
  const { query = EMPTY_OBJECT_READONLY, ...restReqObj } = reqObj,
    generatedURL = `${BASE_API_DOMAIN}${url}?${qs.stringify(query)}`;
  try {
    let response = await fetch(generatedURL, restReqObj);
    return checkStatus<R>(response);
  } catch (error) {
    throw error;
  }
}

export async function get<R>(url: string, reqObj: Pick<ReqObj, 'query'>) {
  return makeCall<R>(url, { ...reqObj, method: 'GET' });
}
