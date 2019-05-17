import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../domain/Todo';
import {sprintf} from 'sprintf-js';
import {API_CALLS} from '../../utils/api_calls.util';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {
  }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(API_CALLS.BASE_URL + sprintf(API_CALLS.GET_ALL_TODOS, username));
  }

  deleteTodo(username, id) {
    return this.httpClient.delete<Todo[]>(API_CALLS.BASE_URL + sprintf(API_CALLS.DELETE_TODO, username, id));
  }

  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(API_CALLS.BASE_URL + sprintf(API_CALLS.GET_TODO, username, id));
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(API_CALLS.BASE_URL + sprintf(API_CALLS.UPDATE_TODO, username, id), todo);
  }

  addTodo(username, todo) {
    return this.httpClient.post<Todo>(API_CALLS.BASE_URL + sprintf(API_CALLS.ADD_TODO, username), todo);
  }
}
