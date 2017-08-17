/**
 * Created by atoui on 16/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import {GestionPage} from "./gestionpage";
import {GestionPageService} from "./gestionpage.service";
import {Router} from '@angular/router';

@Component({
    selector: 'gestionpage',
    templateUrl: './gestionpage.component.html',

})
export class GestionPageComponent implements OnInit {
    private ckeditorContent:string;
    private gestionpage:GestionPage = new GestionPage('','','','');
    err=false;
    aliasError = " ";


    constructor(private router:Router,
                private gestionpageservice:GestionPageService) {

    }


    public addPage(gestionpage){
        this.aliasError=""
        console.log(gestionpage);
        this.gestionpageservice.addPage(gestionpage).subscribe(
            response =>  {
                if(response.error) {
                    alert(`The page could not be added, server Error.`);

                } else {
                    alert(`page added successfully.`);
                }
            },
            error=> {
                this.err=true;
                this.aliasError="The page could not be added, alias duplicate !"
                //alert(`The page could not be added, server Error.`);
            }
        );

    }

    public resetAddPage(){
        this.gestionpage = new GestionPage('','','','');
    }

    ngOnInit():void {
        this.ckeditorContent = `<p>My HTML</p>`;


    }
}
