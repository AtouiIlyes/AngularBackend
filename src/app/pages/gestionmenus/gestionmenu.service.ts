/**
 * Created by atoui on 17/08/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {GestionPage} from "../gestionpages/gestionpage";
import {GestionMenu} from "./gestionmenu";


@Injectable()
export class GestionMenuService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    // private instance variable to hold base url
    private pageURL = 'http://localhost:8080/api/pageswithoutmenu';
    private menuURL = 'http://localhost:8080/api/menus/';
    private menuUpdate ='http://localhost:8080/api/menus/';
    private menuArchive ='http://localhost:8080/api/menus/archiver/'
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
    getMenu(id: string) : Observable<GestionMenu> {
        return this.http.get(this.menuURL+id)
            .map((res:Response) => {
                console.log(res);
                return  res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    // Fetch all existing pages
    getMenus() : Observable<GestionMenu[]> {

        // ...using get request
        console.log(this.http);

        return this.http.get(this.menuURL)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <GestionMenu[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    public addMenu(gestionmenu:GestionMenu){
        return this.http.post(`${this.menuURL}`,gestionmenu)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // archive a Menu
    archiverMenu(id:string) {
        console.log(id);
        return this.http.put(`${this.menuArchive}${id}`,GestionMenu) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

// Update a Menu
    updateMenu(id:string,menu:GestionMenu) {
        console.log(id,menu);
        return this.http.put(`${this.menuUpdate}${id}`,menu) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Update a News
    updateSortableMenu(menus:GestionMenu[]) {
        //console.log(id,menu);
        return this.http.put(`${this.menuURL}`, menus) // ...using put request
            .map((res:Response) => {return res.json(); }) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

}