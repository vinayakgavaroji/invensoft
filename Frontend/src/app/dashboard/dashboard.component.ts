import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  issuedBooks : any;
  book : any;

  constructor(private shared: SharedService, private _router: Router) { }

  ngOnInit(){
    this.loadBarChart();
    this.loadPieChart();

    this.getBooks();
    this.getStudent();
  }

  getStudent(){
    this.shared.getBooks().subscribe((books) => {
      this.book = books;
    })
  }

  getBooks(){
    this.shared.getIssuedBooks().subscribe((data) => {
      this.issuedBooks = data;
    })
  }

  loadBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
        datasets: [{
          label: 'No. Of Books',
          data: [5, 8, 12, 7, 4],
          backgroundColor: '#2f5597',
        }]
      }
    });
  }

  loadPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        datasets: [{
          data: [14, 22, 33, 20, 11],
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
            '#e7e9ed'
          ],
        }],
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']
      }
    });
  }

  showViewTable() {
    this._router.navigate(['/books']);
  }

  showDeleteTable() {
    this._router.navigate(['/books', { deleteMode: false }]);
  }

}
