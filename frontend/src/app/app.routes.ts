import { Routes } from '@angular/router';
import { NetworkGraphComponent } from './components/network-graph/network-graph.component';

export const routes: Routes = [
    { path: 'graph', component: NetworkGraphComponent },
    { path: 'create', component: NetworkGraphComponent },
];
