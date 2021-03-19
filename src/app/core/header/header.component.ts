import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route1() {
    this.router.navigate(['/my-comp']);
  }
  route2() {
    this.router.navigate(['/user']);
  }
  home () {
    this.router.navigate(['/home']);
  }
}
