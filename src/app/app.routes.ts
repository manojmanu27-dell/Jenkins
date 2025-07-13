import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Build } from '../components/build/build';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "build",
        component: Build
    }
];
