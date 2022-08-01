import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Dealeraddress } from '../dealeraddress';

@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.css']
})
export class DealersListComponent implements OnInit {

  dealers: Observable<Dealeraddress[]> | any;

  constructor(private as: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    }
    reloadData(){
      this.dealers
    }

}
