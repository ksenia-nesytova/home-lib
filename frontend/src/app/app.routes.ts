import { Routes } from '@angular/router';
import { NetworkGraphComponent } from '@app/features/network-graph/network-graph.component';

export const routes: Routes = [
    { path: 'graph', component: NetworkGraphComponent },
    { path: 'create', component: NetworkGraphComponent },
];
