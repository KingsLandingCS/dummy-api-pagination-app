import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  data: any[] = []; // Array to hold fetched data
  // Pagination variables
  currentPage = 1; // Current page number
  itemsPerPage = 10; // Number of items per page

  constructor(private dataService: DataService) { } // Remove @Inject

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDataFromServer().subscribe((result: any) => {
      const { products } = result;
      products.forEach((element: any) => {
        this.data.push(element);
        console.log(this.data);
      });
    });
  }
}
