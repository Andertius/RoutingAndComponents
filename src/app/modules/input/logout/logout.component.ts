import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userName: string = "";

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => this.userName = String(params.get('userName')))
    );
    // this.activatedRoute.params.subscribe(params => this.userName = params['userName']);
  }

  // constructor(private route: Router) {
    
  // }
  
  go(): void {
		this.route.navigate(['/login']);
	}

  ngOnInit(): void {
  }

}
