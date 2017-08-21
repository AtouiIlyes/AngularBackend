/**
 * Created by atoui on 17/08/2017.
 */
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './gestionmenu.routing';
import { CommonModule } from '@angular/common';
import {NgaModule} from "../../theme/nga.module";
import {GestionMenuService} from "./gestionmenu.service";
import {HotTableModule} from "ng2-handsontable/handsontable.module";
import {DataTableModule} from "angular2-datatable/index";
import {Ng2SmartTableModule} from "ng2-smart-table/ng2-smart-table.module";
import {MenuList} from "./menusList.component";
import {AddMenuComponent} from "./add-menu.component";
import {UpdateMenuComponent} from "./update-menu.component";
import {DataFilterPipe} from "./data-filter.pipe";
import {GestionMenuComponent} from "./gestionmenu.component";
import { NguiSortableModule } from '@ngui/sortable';
import {OrderMenuComponent} from "./order-menu.component";
import { TreeModule } from 'ng2-tree';
import {DndModule} from 'ng2-dnd';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        JsonpModule,
        HttpModule,
        Ng2SmartTableModule,
        DataTableModule,
        HotTableModule,
        NguiSortableModule,
        TreeModule,
        DndModule.forRoot()

    ],
    declarations: [
        GestionMenuComponent,
        AddMenuComponent,
        UpdateMenuComponent,
        MenuList,
        OrderMenuComponent,
        DataFilterPipe


    ],
   
    providers: [
        GestionMenuService
    ]

})
export class GestionMenuModule { }
