import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from './components/item-certificado/item-certificado.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
}
