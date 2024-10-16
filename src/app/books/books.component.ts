import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  book: any;
  deleteMode: Boolean = true;

  constructor(private shared : SharedService, private _aRoute: ActivatedRoute){}

  ngOnInit() {
    this._aRoute.params.subscribe((params) => {
      this.deleteMode = params['deleteMode'];
    })

    this.loadBook();
  }

  loadBook(){
    this.shared.getBooks().subscribe((books) => {
      this.book = books;
    })
  }

  deleteBook(id: any){
    this.shared.deleteBook(id).subscribe(() => {
      alert("Deleted Successfully");
      this.loadBook();
    })
  }
}
