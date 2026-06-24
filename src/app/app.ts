import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* pages import */
import {Home as HomePage} from './pages/home/home';
import {Products as ProductsPage} from './pages/products/products';

/* component import */
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, ProductsPage, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpClient');
}
