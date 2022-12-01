import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  burgerIcon = false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.burgerIcon = !this.burgerIcon
  }

  bool = true

}
