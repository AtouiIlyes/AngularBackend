/*** Created by atoui on 16/08/2017.*/
import {GestionPage} from "./gestionpage";
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GestionPageService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    // private instance variable to hold base url
    private pageURL = 'http://localhost:8080/api/pages/';
    // private instance variable to hold base url
    private pageUpdate ='http://localhost:8080/api/pages/';
    private pageArchive ='http://localhost:8080/api/pages/archiver/'

    public addPage(gestionpage:GestionPage){
        return this.http.post(`${this.pageURL}`,gestionpage)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPage(id: string) : Observable<GestionPage> {
        return this.http.get(this.pageURL+id)
            .map((res:Response) => {
                console.log(res);
                return  res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    // Fetch all existing pages
    getPages() : Observable<GestionPage[]> {

        // ...using get request
        console.log(this.http);

        return this.http.get(this.pageURL)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <GestionPage[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
    
    // archive a News
    archiverPage(id:string) {
        console.log(id);
        return this.http.put(`${this.pageArchive}${id}`,GestionPage) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

// Update a News
    updatePage(id:string,page:GestionPage) {
        console.log(id,page);
        return this.http.put(`${this.pageUpdate}${id}`,page) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


}