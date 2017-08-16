import { Component, OnInit } from '@angular/core';
import {ActualiteService} from "./actualite.service";
import { Router } from '@angular/router';
import {Actualite} from "./actualite";
import { Http, Response } from '@angular/http';

@Component({
  selector: 'data-tables',
  templateUrl: './newsList.html',
  styleUrls: ['./newsList.scss']
})
export class NewsList implements OnInit{

    actualites: Actualite[];
    actualite: Actualite;

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "title";
    sortOrder = "asc";

    constructor(
        private router: Router,
        private actualiteService: ActualiteService) { }

    getActualites(): void {
        this.actualiteService.getActualites()
            .subscribe(
                actualites => this.actualites = actualites, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    ngOnInit(): void {
        this.getActualites();
    }

    public archiverNews(id:string){
        this.actualiteService.archiverNews(id).subscribe(
            response => {
                if(response.error) {
                    alert(`The news could not be archived, server Error.`);
                } else {
                    this.getActualites();
                    alert(`The news is archived.`);


                }
            },
            error=> {
                alert(`The news could not be archived, server Error.`);
            }
        );
    }

    onSelect(actualite: Actualite): void {
        this.actualite = actualite;
    }


    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.title.length;
    }

    
}
