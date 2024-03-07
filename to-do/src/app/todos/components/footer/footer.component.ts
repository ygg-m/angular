import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilterEnum } from '../../../types/todo/filter.enum';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  todoService = inject(TodoService);
  noTodoClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filterEnum = FilterEnum;
  filter$: Observable<FilterEnum>;

  constructor() {
    // hide footer
    this.noTodoClass$ = this.todoService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    // active count
    this.activeCount$ = this.todoService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );

    // items left text
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );

    // active filter
    this.filter$ = this.todoService.filter$;
  }

  changeFilter(event: Event, filter: FilterEnum): void {
    event.preventDefault();
    this.todoService.changeFilter(filter);
  }
}
