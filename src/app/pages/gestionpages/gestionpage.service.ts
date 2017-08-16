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
    private pageURL = 'http://localhost:8080/api/pages';


    public addPage(gestionpage:GestionPage){
        return this.http.post(`${this.pageURL}`,gestionpage)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}