/**
 * Created by atoui on 17/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import {GestionMenu} from "./gestionmenu";
import {GestionMenuService} from "./gestionmenu.service";

@Component({
    selector: 'menu-list',
    templateUrl: './menusList.component.html'
})
export class MenuList implements OnInit{

    menus: GestionMenu[];
    menu: GestionMenu;

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "title";
    sortOrder = "asc";

    constructor(
        private router: Router,
        private menuService: GestionMenuService) { }

    getMenus(): void {
        this.menuService.getMenus()
            .subscribe(
                menus => this.menus = menus, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    ngOnInit(): void {
        this.getMenus();
    }

    public archiverMenu(id:string){
        this.menuService.archiverMenu(id).subscribe(
            response => {
                if(response.error) {
                    alert(`The menu could not be archived, server Error.`);
                } else {
                    this.getMenus();
                    alert(`The menu is archived.`);


                }
            },
            error=> {
                alert(`The menu could not be archived, server Error.`);
            }
        );
    }

    onSelect(menu: GestionMenu): void {
        this.menu = menu;
    }


    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.title.length;
    }


}