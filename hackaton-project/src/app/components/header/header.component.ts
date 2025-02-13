import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  goToPresentation(){
    this.router.navigate(['']);
    this.menuOpen = !this.menuOpen;
  }
  goToPartners(){
    this.router.navigate(['/partners']);
    this.menuOpen = !this.menuOpen;
    
  }

  goToEvents(){
    this.router.navigate(['/events']);
    this.menuOpen = !this.menuOpen;
  }
}
