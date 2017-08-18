/**
 * Created by atoui on 15/08/2017.
 */
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './gestionpage.routing';
import { CommonModule } from '@angular/common';
import {NgaModule} from "../../theme/nga.module";
import {GestionPageComponent} from "./gestionpage.component";
import { CKEditorModule } from 'ng2-ckeditor';
import {GestionPageService} from "./gestionpage.service";
import {PageList} from "./pageList.component";
import {AddPageComponent} from "./add-page.component";
import {UpdatePageComponent} from "./update-page.component";
import {DataFilterPipe} from "./data-filter.pipe";
import {HotTableModule} from "ng2-handsontable/handsontable.module";
import {DataTableModule} from "angular2-datatable/index";
import {Ng2SmartTableModule} from "ng2-smart-table/ng2-smart-table.module";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        HttpModule,
        JsonpModule,
        CKEditorModule,
        Ng2SmartTableModule,
        DataTableModule,
        HotTableModule



    ],
    declarations: [
        GestionPageComponent,
        PageList,
        AddPageComponent,
        UpdatePageComponent,
        DataFilterPipe


    ],
    providers: [
        GestionPageService
    ]

})
export class GestionPageModule { }
