import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { detailResolver } from './detail/detail.resolver';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail', component: DetailComponent, resolve: { detail: detailResolver } },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
