/**
 * Created by atoui on 15/08/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import { Contact } from './contact';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    // private instance variable to hold base url
    private contactssUrl = 'http://localhost:8080/api/contacts';


// Fetch all existing comments
    getMessages():Observable<Contact[]> {

        // ...using get request
        console.log(this.http);

        return this.http.get(this.contactssUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <Contact[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }


}