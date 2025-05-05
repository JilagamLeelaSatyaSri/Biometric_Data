import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BiometricComponent } from "./biometric/biometric.component";
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { HospitalComponent } from './hospital/hospital.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Biometric';
  
}
