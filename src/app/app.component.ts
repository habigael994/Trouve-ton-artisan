import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component' ;
import { FooterComponent } from './footer/footer.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { ErrorComponent } from './error/error.component';
import { PageArtisanComponent } from './page-artisan/page-artisan.component';
import { AccueilComponent } from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ArtisansComponent,ErrorComponent,PageArtisanComponent,AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trouve-ton-artisan';
}
