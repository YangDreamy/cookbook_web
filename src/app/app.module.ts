import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
<<<<<<< HEAD
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router';

=======
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
>>>>>>> 617611fab1c29dd3e0550600b7c0d9b1fb4da95c
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    FileUploadModule,
<<<<<<< HEAD
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    // RouterModule.forRoot(AppRoutes) 
=======
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'components/shopping-list', component: ShoppingListComponent}
    ])
>>>>>>> 617611fab1c29dd3e0550600b7c0d9b1fb4da95c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
