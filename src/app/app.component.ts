import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from './components/item-certificado/item-certificado.component';
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { CertificatesComponent } from "./pages/certificates/certificates.component";
import { CertificateFormComponent } from "./pages/certificate-form/certificate-form.component";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent, BaseUiComponent, CertificatesComponent, CertificateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
}
