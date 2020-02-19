import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AciStoreComponent } from './acistore/acistore.component';

@Injectable()
export class AciStoreFirstGuard{

    private firstNavigation=true;

    constructor(private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        if(this.firstNavigation){
            this.firstNavigation = false;
            if(route.component != AciStoreComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}