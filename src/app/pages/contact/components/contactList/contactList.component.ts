/**
 * Created by atoui on 15/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./contact.service";
import { Router } from '@angular/router';

@Component({
    selector: 'data-tables',
    templateUrl: './contactList.component.html',
    


})
export class ContactList implements  OnInit{


    contacts: Contact[];
    contact: Contact;


    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "title";
    sortOrder = "asc";

    constructor(
        private router: Router,
        private contactService: ContactService) { }

    getMessages(): void {
        this.contactService.getMessages()
            .subscribe(
                contacts => this.contacts = contacts, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    ngOnInit(): void {
        this.getMessages();
    }
}