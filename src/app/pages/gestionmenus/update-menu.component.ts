/**
 * Created by atoui on 17/08/2017.
 */
import { Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import {GestionMenu} from "./gestionmenu";
import {GestionMenuService} from "./gestionmenu.service";
import {GestionPage} from "../gestionpages/gestionpage";



@Component({
    selector: 'update-news',
    templateUrl: './update-menu.component.html'
})

export class UpdateMenuComponent implements OnInit{
    id: string;
    pages: GestionPage[];
    page: GestionPage;
    private menu:GestionMenu = new GestionMenu('','',0,'',false);
    constructor(
        private gestionmenuservice: GestionMenuService,
        private route: ActivatedRoute,
        private router: Router
 
    )
    {

        this.route.params.subscribe(
            (params : Params) => {
                this.id = params["id"];
                console.log(this.id)
            }
        );
    }
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
    
    public updateMenu(id,menu){
        this.gestionmenuservice.updateMenu(this.id,this.menu).subscribe(
            response => {
                console.log(this.id,this.menu)
                if(response.error) {
                    alert(`The menu could not be update, server Error.`);
                } else {
                    //this.getPages();
                    alert(`The menu is updated.`);

                }
            },
            error=> {
                alert(`The menu could not be updated, server Error.`);
            }
        );
    }



    ngOnInit(): void {
        this.getPages();
        this.gestionmenuservice.getMenu(this.id).subscribe(menu => this.menu = menu);
    }


    public resetUpdateMenu(){
        this.menu = new GestionMenu('','',0,'',false);
    }



}