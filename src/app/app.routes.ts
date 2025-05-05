import { Routes } from '@angular/router';
import { BiometricComponent } from './biometric/biometric.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { DataMSComponent } from './data-ms/data-ms.component';
import { BiometricdataComponent } from './biometricdata/biometricdata.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
   
  {
    path: 'biometric', 
    component: BiometricComponent, 
    children: [
      { path: 'attendence', component: AttendenceComponent},
      { path: 'data-management', component: DataMSComponent }
    ]
  },
    { path: '', 
        redirectTo:'app',
        pathMatch:'full'
     },

];
