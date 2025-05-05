import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataMSComponent } from "../data-ms/data-ms.component";
import { AttendenceComponent } from "../attendence/attendence.component";

@Component({
  selector: 'app-biometric',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './biometric.component.html',
  styleUrl: './biometric.component.css'
})
export class BiometricComponent {

}
