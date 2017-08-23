/**
 * Created by atoui on 17/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {MenuList} from "./menusList.component";
import {AddMenuComponent} from "./add-menu.component";
import {UpdateMenuComponent} from "./update-menu.component";
import {GestionMenuComponent} from "./gestionmenu.component";
import {OrderMenuComponent} from "./order-menu.component";



// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: GestionMenuComponent,
        children: [
            { path: 'addmenu', component: AddMenuComponent} ,
            { path: 'update/:id', component: UpdateMenuComponent },
            { path: 'ordermenu', component: OrderMenuComponent },

        ]


    }
];

export const routing = RouterModule.forChild(routes);
