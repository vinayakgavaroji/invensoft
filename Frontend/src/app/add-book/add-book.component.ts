import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  addBookForm! : FormGroup;
  successMsg! : String;
  submitted : Boolean = false;
  errorMsg! : String;

  constructor(private shared: SharedService, private _router: Router){}

  ngOnInit() {
    this.addBookForm = new FormGroup({
      isbn : new FormControl('', [Validators.required, Validators.pattern(/^\d{5,50}$/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]*)+( [A-Za-z]*)+$/), Validators.maxLength(50)]),
      author: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.maxLength(50)]),
      publication: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.maxLength(50)]),
      details: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      qty: new FormControl('', [Validators.required,Validators.min(1), Validators.max(5)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]),
      branch: new FormControl('', [Validators.required])
    })
  }

  addBook(){
    this.submitted = true;
    this.shared.addBook(this.addBookForm.value).subscribe((data) => {
      this.successMsg = "Book added successfully";

      setTimeout(() => {
        this._router.navigate(['dashboard'])
      }, 2000)
    },(err) => {
      this.errorMsg = "Failed to add book.!"
    })
  }
  
}
