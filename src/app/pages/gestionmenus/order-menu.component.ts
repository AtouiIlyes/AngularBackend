/**
 * Created by atoui on 21/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GestionMenu} from "./gestionmenu";
import {GestionMenuService} from "./gestionmenu.service";
import {TreeModel} from "ng2-tree/index";
@Component({
    selector: 'order-menu',
    templateUrl: './order-menu.component.html',
    styleUrls: ['./order-menu.component.css']

})
export class OrderMenuComponent implements OnInit  {
    menus: GestionMenu[];
    menu: GestionMenu;
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

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
}