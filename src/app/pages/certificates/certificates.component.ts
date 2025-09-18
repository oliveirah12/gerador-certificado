import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from "../../components/item-certificado/item-certificado.component";

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
