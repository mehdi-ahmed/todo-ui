import {environment} from '../../environments/environment';

export const API_CALLS = {

  BASE_URL: environment.baseURL,
  AUTHENTICATE: '/basicauth',
  GET_ALL_TODOS: '/users/%s/todos',
  GET_TODO: '/users/%s/todos/%s',
  DELETE_TODO: '/users/%s/todos/%s',
  ADD_TODO: '/users/%s/todos',
  UPDATE_TODO: '/users/%s/todos/%s',
  GET_MESSAGE_WITH_PARAM: 'hello-bitches/path-variable/%s'
};



