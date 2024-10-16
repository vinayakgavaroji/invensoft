import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "addBook", component:AddBookComponent },
  { path: "books", component: BooksComponent },
  { path: "issuebooks", component: IssueBookComponent },
  { path: "addStudent", component: AddStudentComponent },
  { path: "**", redirectTo: "login", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
