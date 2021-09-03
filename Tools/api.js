import {API_Baseurl} from './constants';

export const getData=async(controllerName)=>{
    var returnBox = await fetch(API_Baseurl + controllerName, {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(ResponseJson => ResponseJson)
      .catch(error => error);
    return returnBox;

}