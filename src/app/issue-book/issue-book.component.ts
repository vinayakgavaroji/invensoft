import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit{

  issueBookForm! : FormGroup
  submitted : boolean = false;
  successMsg : String = "";
  errorMsg : String = "";
  getBooks : any[] = [];
  getStudents : any[] = [];

  constructor(private shared: SharedService){}

  ngOnInit(){
    this.shared.getBooks().subscribe((data) => {
      this.getBooks = data;
    })

    this.shared.getStudents().subscribe((data) => {
      this.getStudents = data;
    })

    this.issueBookForm = new FormGroup({
      isbn : new FormControl('', [Validators.required]),
      bookName: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      rollNo: new FormControl('', [Validators.required]),
      sName: new FormControl('', [Validators.required]),
      issuedOn: new FormControl('',[Validators.required]),
    })
  }

  issueBook(){
    this.submitted = true;
    const selectedBook = this.getBooks.find(book => book.isbn == this.issueBookForm.value.isbn);
    const selectedStudent = this.getStudents.find(student => student.rollNo == this.issueBookForm.value.rollNo)

    if(selectedBook && selectedStudent && selectedBook.qty > 0){
      let issueBookToStudent = {
        rollNo : selectedStudent.rollNo,
        isbn: selectedBook.isbn,
        bookName: selectedBook.name,
        author: selectedBook.author,
        sName: selectedStudent.name,
        issuedOn: this.issueBookForm.value.issuedOn
      }
  
      this.shared.issueBooks(issueBookToStudent).subscribe((res) => {
        alert("Book issued to student")
      }, (error) => {
        this.errorMsg = "Error issuing book" + error
      })
    }
  }

}