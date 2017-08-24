/**
 * Created by atoui on 21/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GestionMenu} from "./gestionmenu";
import {GestionMenuService} from "./gestionmenu.service";
import {TreeModel} from "ng2-tree/index";
@Component({
    selector: 'order-menu',
    templateUrl: './order-menu.component.html',
    styleUrls: ['./order-menu.component.css']

})
export class OrderMenuComponent implements OnInit {
    menus:GestionMenu[];
    menu:GestionMenu;
    i = 0;

    constructor(private router:Router,
                private menuService:GestionMenuService) {
    }


    getMenus():void {
        this.menuService.getMenus()
            .subscribe(
                menus => this.menus = menus, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    sortChanged($event:any,menus,i):void {
        this.i=i;
        var position =0;
        menus.forEach((menu,i) => {
            menu.position = position - 49 + i;

        });
        console.log(menus);

    }
    public updateSortableMenu(menus){
        console.log(menus);
        this.menuService.updateSortableMenu(this.menus).subscribe(
            response => {
                //console.log(this.menus)
                if(response.error) {
                    alert(`The menus could not be update, server Error.`);
                } else {
                    alert(`The menus is ordered and updated.`);

                }
            },
            error=> {
                alert(`The menus could not be update, server Error.`);
            }
        );
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

    ngOnInit():void {
        this.getMenus();
    }
}