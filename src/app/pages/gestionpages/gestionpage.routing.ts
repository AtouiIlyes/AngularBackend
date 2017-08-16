/**
 * Created by atoui on 16/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {GestionPageComponent} from "./gestionpage.component";



// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: GestionPageComponent
        

    }
];

export const routing = RouterModule.forChild(routes);
