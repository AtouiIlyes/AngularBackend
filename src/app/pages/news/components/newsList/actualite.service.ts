/**
 * Created by atoui on 24/07/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import { Actualite } from './actualite';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ActualiteService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
    // private instance variable to hold base url
    private archiveURL= 'http://localhost:8080/api/actualites/archiver/';
    private actualitesUrl = 'http://localhost:8080/api/actualites';
    private getActualiteUrl = 'http://localhost:8080/api/actualites/';
    private updateURL = 'http://localhost:8080/api/actualites/';

// Fetch all existing comments
    getActualites() : Observable<Actualite[]> {

        // ...using get request
        console.log(this.http);
       
        return this.http.get(this.actualitesUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <Actualite[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }



    getActualite(id: string) : Observable<Actualite> {
        return this.http.get(this.getActualiteUrl+id)
            .map((res:Response) => {
                console.log(res);
                return  res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    public addNews(actualite:Actualite){
        return this.http.post(`${this.getActualiteUrl}`,actualite)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // archive a News
    archiverNews(id:string) {
        console.log(id);
        return this.http.put(`${this.archiveURL}${id}`,Actualite) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

// Update a News
    updateNews(id:string,actualite:Actualite) {
        console.log(id,actualite);
        return this.http.put(`${this.updateURL}${id}`,actualite) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

}