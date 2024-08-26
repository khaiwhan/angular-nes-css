import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Item } from '../item.interface';

export const detailResolver: ResolveFn<Item> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(Router).getCurrentNavigation()?.extras.state as Item ?? { item: {} as Item };
