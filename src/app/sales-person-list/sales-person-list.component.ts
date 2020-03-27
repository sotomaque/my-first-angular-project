import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 50000),
    new SalesPerson("James", "Bond", "james.bond@gmail.com", 40000),
    new SalesPerson("Lindsey", "Kevin", "lindsey.kevin@gmail.com", 90000),
    new SalesPerson("Juan", "Rosas", "juan.rosas@gmail.com", 1000)
  ]

}
