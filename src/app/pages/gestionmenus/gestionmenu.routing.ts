/**
 * Created by atoui on 17/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {MenuList} from "./menusList.component";
import {AddMenuComponent} from "./add-menu.component";
import {UpdateMenuComponent} from "./update-menu.component";



// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: MenuList,
        children: [
            { path: 'addmenu', component: AddMenuComponent} ,
            { path: 'update/:id', component: UpdateMenuComponent }
        ]


    }
];

export const routing = RouterModule.forChild(routes);
