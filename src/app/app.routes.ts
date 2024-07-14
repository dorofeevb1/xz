import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CasesComponent } from './components/cases/cases.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { RequestComponent } from './components/request/request.component';

export const routes: Routes = [
    

      { path: '', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'cases', component: CasesComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'request', component: RequestComponent }
    ];
