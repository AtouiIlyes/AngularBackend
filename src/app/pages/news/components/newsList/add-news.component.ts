/**
 * Created by atoui on 04/08/2017.
 */
import { Component,OnInit,Input,ElementRef } from '@angular/core';
import {ActualiteService} from "./actualite.service";
import {Actualite} from "./actualite";
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";


const URL = 'http://localhost:8080/api/actualites/upload';


@Component({
    selector: 'add-news',
    templateUrl: './add-news.component.html'
})
export class AddNewsComponent implements OnInit  {


    private actualite:Actualite = new Actualite('','','',false,false,'');
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


    constructor(private actualiteService: ActualiteService,private http: Http, private el: ElementRef) {}
    //the function which handles the file upload without using a plugin.


    public addNews(actualite){
        this.upload();
        console.log(actualite);
        this.actualiteService.addNews(actualite).subscribe(
            response =>  {
                if(response.error) {
                    alert(`The news could not be added, server Error.`);
                } else {
                    alert(`news added successfully.`);
                }
            },
            error=> {
                alert(`The news could not be added, server Error.`);
            }
        );

    }

    public resetAddNews(){
        this.actualite = new Actualite('','','',false,false,'');
    }

    ngOnInit() {
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
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