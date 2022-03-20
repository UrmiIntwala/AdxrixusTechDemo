import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  users:any[] = [];
  activePage = 0;
  start=0; 
  end=5; 
  limit=12;
  searchText:string;
  constructor(private dataService: GetDataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(response => {
      this.users = response
    })
  }

  displayActivePage(activePageNumber: number): void {
    this.activePage = activePageNumber;
    this.end = activePageNumber * this.limit;
    this.start = this.end - this.limit;
  }

}
