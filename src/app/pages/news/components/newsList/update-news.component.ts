/**
 * Created by atoui on 14/08/2017.
 */
import { Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Actualite} from "./actualite";
import {ActualiteService} from "./actualite.service";
import { ActivatedRoute, Params } from '@angular/router';
import {FileUploader} from "ng2-file-upload/index";
import { Http, Response } from '@angular/http';


const URL = 'http://localhost:8080/api/actualites/upload';

@Component({
    selector: 'add-news',
    templateUrl: './update-news.component.html'
})    
    
export class UpdateNewsComponent implements OnInit{
    id: string;

    private actualite:Actualite = new Actualite('','','',false,false,'');
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    constructor(
        private actualiteService: ActualiteService,
        private route: ActivatedRoute,
        private router :Router,
        private http: Http,
        private el: ElementRef
    )
    {

        this.route.params.subscribe(
            (params : Params) => {
                this.id = params["id"];
                console.log(this.id)
            }
        );
    }
    public updateNews(id,actualite){
        this.upload();
        this.actualiteService.updateNews(this.id,this.actualite).subscribe(
            response => {
                if(response.error) {
                    alert(`The news could not be update, server Error.`);
                } else {
                    alert(`The news is updated.`);
                    this.router.navigate(['/newslist']);

                }
            },
            error=> {
                alert(`The news could not be updated, server Error.`);
            }
        );
    }



    ngOnInit(): void {

        this.actualiteService.getActualite(this.id).subscribe(actualite => this.actualite = actualite);
    }


    public resetUpdateNews(){
        this.actualite = new Actualite('','','',false,false,'');
    }
    public upload() {
        //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
        //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
        //create a new fromdata instance
        let formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
            formData.append('photo', inputEl.files.item(0));
            //call the angular http method
            this.http
                //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                .post(URL, formData).map((res:Response) => res.json()).subscribe(
                //map the success function and alert the response
                (success) => {
                    console.log(success._body);
                },
                (error) => console.log(error))
        }
    }


}