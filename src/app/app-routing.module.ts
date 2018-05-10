import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [];

const appRouter = [
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent }

]
export const AppRoutingModule = RouterModule.forRoot(appRouter);

