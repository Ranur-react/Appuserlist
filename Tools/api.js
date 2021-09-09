import {API_Baseurl} from './constants';
export const getDatafromtoyota = async controllerName => {
  var returnBox = await fetch('https://reqres.in/api/users?page=2', {
    method: 'GET',
  })
    .then(Response => Response.json())
    .then(ResponseJson => ResponseJson)
    .catch(error => error);
  return returnBox;
};
export const getData=async(controllerName)=>{
    var returnBox = await fetch(API_Baseurl + controllerName, {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(ResponseJson => ResponseJson)
      .catch(error => error);
    return returnBox;

}

export const insertData = async (controllerName,dataJson) => {
  var returnBox = await fetch(API_Baseurl + controllerName, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJson),
  })
    .then(Response => Response.json())
    .then(ResponseJson => ResponseJson)
    .catch(error => error);
  return returnBox;
};

export const updateData = async (controllerName, dataJson) => {
  var returnBox = await fetch(API_Baseurl + controllerName, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJson),
  })
    .then(Response => Response.json())
    .then(ResponseJson => ResponseJson)
    .catch(error => error);
  return returnBox;
};
export const deleteData = async (controllerName, dataJson) => {
  var returnBox = await fetch(API_Baseurl + controllerName, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(Response => Response.json())
    .then(ResponseJson => ResponseJson)
    .catch(error => error);
  return returnBox;
};