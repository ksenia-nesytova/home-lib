import { Routes } from '@angular/router';
import { NetworkGraphComponent } from '@app/features/network-graph/network-graph.component';
import { CardsPageComponent } from '@app/features/cards-page/cards-page.component';

export const routes: Routes = [
    { path: '', component: CardsPageComponent },
    { path: 'graph', component: NetworkGraphComponent },
    { path: 'create', component: NetworkGraphComponent },
];
