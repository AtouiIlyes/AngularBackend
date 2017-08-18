/**
 * Created by atoui on 17/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import {GestionPage} from "../gestionpages/gestionpage";
import {GestionMenuService} from "./gestionmenu.service";
import {GestionMenu} from "./gestionmenu";
    
@Component({
    selector: 'gestionmenu',
    templateUrl: './add-menu.component.html'


})
export class AddMenuComponent implements OnInit {
    pages: GestionPage[];
    page: GestionPage;
    private gestionmenu:GestionMenu = new GestionMenu('','',0,'',false);


    constructor(
        private gestionmenuservice: GestionMenuService) { }

    getPages(): void {
        this.gestionmenuservice.getPages()
            .subscribe(
                pages => this.pages = pages, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }
    public addMenu(gestionmenu){
        console.log(gestionmenu);
        this.gestionmenuservice.addMenu(gestionmenu).subscribe(
            response =>  {
                if(response.error) {
                    alert(`The menu could not be added, server Error.`);

                } else {
                    this.getPages();
                    alert(`menu added successfully.`);
                }
            },
            error=> {
                alert(`The menu could not be added, server Error.`);
            }
        );

    }

    public resetAddMenu(){
        this.gestionmenu = new GestionMenu('','',0,'',false);
    }
    ngOnInit():void {
        this.getPages();

    }
    
}