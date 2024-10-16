import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http : HttpClient) { }

  private _url = "http://localhost:3000/";

  getIssuedBooks():Observable<any>{
    return this.http.get<any>(this._url+"issuedBooks");
  }

  issueBooks(body: any):Observable<any>{
    return this.http.post<any>(this._url+"issuedBooks", body);
  }

  getBooks():Observable<any>{
    return this.http.get<any>(this._url+"books");
  }

  getStudents():Observable<any>{
    return this.http.get<any>(this._url+"students")
  }

  addBook(body: any):Observable<any>{
    return this.http.post<any>(this._url+'books', body);
  }

  deleteBook(id: any):Observable<any>{
    return this.http.delete<any>(this._url+"books/"+id);
  }

}
