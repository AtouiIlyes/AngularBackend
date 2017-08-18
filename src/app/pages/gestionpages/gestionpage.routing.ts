/**
 * Created by atoui on 16/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {GestionPageComponent} from "./gestionpage.component";
import {PageList} from "./pageList.component";
import {AddPageComponent} from "./add-page.component";
import {UpdatePageComponent} from "./update-page.component";



// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: GestionPageComponent,
        children: [
            { path: 'pagelist', component: PageList },
            { path: 'addpage', component: AddPageComponent} ,
            { path: 'update/:id', component: UpdatePageComponent }
        ]

    }
];

export const routing = RouterModule.forChild(routes);
