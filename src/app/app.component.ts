import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
}
