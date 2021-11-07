import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  userName: string = "";

  constructor(private router: Router, private route: ActivatedRoute) { } 
  
  go(): void {
		this.router.navigate([`app-component/logout?userName=${this.userName}`]);
		// this.router.navigate(['app-component/logout']);
	}

  loginParent(value: string): void {
    this.userName = value;
    this.go();
  }

  ngOnInit(): void {
  }

}
