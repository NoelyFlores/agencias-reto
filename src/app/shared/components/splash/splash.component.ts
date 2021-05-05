import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  display: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.display = 'none';
      this.router.navigate(['/agencias']);
    }, 5000);
  }

}
