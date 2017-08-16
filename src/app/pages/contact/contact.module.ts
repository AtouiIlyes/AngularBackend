/**
 * Created by atoui on 15/08/2017.
 */
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ContactComponent} from "./contact.component";
import { routing } from './contacts.routing';
import { CommonModule } from '@angular/common';
import {ContactList} from "./components/contactList/contactList.component";
import {NgaModule} from "../../theme/nga.module";
import {ContactService} from "./components/contactList/contact.service";
import {DataFilterPipe} from "./components/contactList/data-filter.pipe";
import { DataTableModule } from "angular2-datatable";
import {BasicTables} from "../news/components/basicTables/basicTables.component";
import {HoverTable} from "../news/components/basicTables/components/hoverTable/hoverTable.component";
import {BorderedTable} from "../news/components/basicTables/components/borderedTable/borderedTable.component";
import {CondensedTable} from "../news/components/basicTables/components/condensedTable/condensedTable.component";
import {StripedTable} from "../news/components/basicTables/components/stripedTable/stripedTable.component";
import {ContextualTable} from "../news/components/basicTables/components/contextualTable/contextualTable.component";
import {ResponsiveTable} from "../news/components/basicTables/components/responsiveTable/responsiveTable.component";
import {SmartTables} from "../news/components/smartTables/smartTables.component";
import {Ng2SmartTableModule} from "ng2-smart-table/ng2-smart-table.module";
import {FileSelectDirective} from "ng2-file-upload/index";
import {SheetDemoComponent} from "../news/components/hotTables/handsontable/sheet-demo";
import {SportDemoComponent} from "../news/components/hotTables/handsontable/sport-demo";
import {ScienceDemoComponent} from "../news/components/hotTables/handsontable/science-demo";
import {FinanceDemoComponent} from "../news/components/hotTables/handsontable/finance-demo";
import {AdvancedDemoComponent} from "../news/components/hotTables/handsontable/advanced-demo";
import {BasicDemoComponent} from "../news/components/hotTables/handsontable/basic-demo";
import {HandsontableSectionComponent} from "../news/components/hotTables/handsontable-section";
import {HotTablesComponent} from "../news/components/hotTables/hotTables.component";
import {HotTableModule} from "ng2-handsontable/handsontable.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        Ng2SmartTableModule,
        DataTableModule,
        HttpModule,
        JsonpModule,
        HotTableModule


    ],
    declarations: [
        ContactComponent,
        ContactList,
        DataFilterPipe




    ],
    providers: [
        ContactService
    ]
    
})
export class ContactModule { }
