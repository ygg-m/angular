import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {}
