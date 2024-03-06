import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { FilterEnum } from '../../types/todo/filter.enum';
import { TodoInterface } from '../../types/todo/interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: uuid(),
    };

    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }

  toggleAll(isCompleted: boolean): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });
    this.todos$.next(updatedTodos);
    console.log('updatedTodos', updatedTodos);
  }
}
