/**
 * Created by atoui on 15/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact.component";
import {ContactList} from "./components/contactList/contactList.component";



// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        children: [
            { path: 'contactlist', component: ContactList }
            
        ]
       
    }
];

export const routing = RouterModule.forChild(routes);
