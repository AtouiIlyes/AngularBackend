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



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        HttpModule,
        JsonpModule,
        CKEditorModule



    ],
    declarations: [
        GestionPageComponent,

 ],
    providers: [
        GestionPageService
    ]

})
export class GestionPageModule { }
