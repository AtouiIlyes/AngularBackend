import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';

import { HotTablesComponent } from './components/hotTables/hotTables.component';
import {NewsList} from "./components/newsList/newsList.component";
import {AddNewsComponent} from "./components/newsList/add-news.component";
import {UpdateNewsComponent} from "./components/newsList/update-news.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'newslist', component: NewsList },
      { path: 'addnews', component: AddNewsComponent} ,
      { path: 'update/:id', component: UpdateNewsComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
