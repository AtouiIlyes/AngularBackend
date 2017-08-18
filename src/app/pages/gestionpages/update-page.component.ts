/**
 * Created by atoui on 18/08/2017.
 */
/**
 * Created by atoui on 17/08/2017.
 */
import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import {GestionPage} from "../gestionpages/gestionpage";
import {GestionPageService} from "./gestionpage.service";



@Component({
    selector: 'update-pages',
    templateUrl: './update-page.component.html'
})

export class UpdatePageComponent implements OnInit{
    id: string;
    private ckeditorContent:string;
    private page:GestionPage = new GestionPage('','','','',false);
    err=false;
    aliasError = " ";

    constructor(
        private gestionpageservice: GestionPageService,
        private route: ActivatedRoute,
        private router: Router

    )
    {
        console.log('dfsfsdf');
        this.route.params.subscribe(
            (params : Params) => {
                this.id = params["id"];
                console.log(this.id)
            }
        );
    }
   

    public updatePage(id,page){
        this.aliasError=""

        this.gestionpageservice.updatePage(this.id,this.page).subscribe(
            response => {
                console.log(this.id,this.page)
                if(response.error) {
                    alert(`The page could not be update, server Error.`);
                } else {
                    alert(`The page is updated.`);

                }
            },
            error=> {
                alert(`The page could not be updated, server Error.`);
                this.err=true;
                this.aliasError="The page could not be added, alias duplicate !"
            }
        );
    }



    ngOnInit(): void {
        this.gestionpageservice.getPage(this.id).subscribe(page => this.page = page);
        this.ckeditorContent = `<p>My HTML</p>`;


    }


    public resetUpdatePage(){
        this.page = new GestionPage('','','','',false);

    }



}