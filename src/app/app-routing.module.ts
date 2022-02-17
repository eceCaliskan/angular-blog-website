import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'contact', component:ContactComponent},
{path:'blog', component:BlogComponent},
{path:'add-blog', component:AddBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
