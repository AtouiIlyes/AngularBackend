/**
 * Created by atoui on 18/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GestionPage} from "./gestionpage";
import {GestionPageService} from "./gestionpage.service";


@Component({
    selector: 'page-list',
    templateUrl: './pagesList.component.html'
})
export class PageList implements OnInit{

    pages: GestionPage[];
    page: GestionPage;

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "title";
    sortOrder = "asc";

    constructor(
        private router: Router,
        private pageService: GestionPageService) { }

    getPages(): void {
        this.pageService.getPages()
            .subscribe(
                pages => this.pages = pages, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    ngOnInit(): void {
        this.getPages();
    }

    public archiverPage(id:string){
        this.pageService.archiverPage(id).subscribe(
            response => {
                if(response.error) {
                    alert(`The page could not be archived, server Error.`);
                } else {
                    this.getPages();
                    alert(`The page is archived.`);


                }
            },
            error=> {
                alert(`The page could not be archived, server Error.`);
            }
        );
    }

    onSelect(page: GestionPage): void {
        this.page = page;
    }


    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.title.length;
    }


}