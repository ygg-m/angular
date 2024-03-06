import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {}
