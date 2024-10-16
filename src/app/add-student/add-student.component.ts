import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  studentForm! : FormGroup;
  submitted : Boolean = false;

  constructor(private shared: SharedService) {}

  ngOnInit(){
    this.studentForm = new FormGroup({
      name: new FormControl('' ,[Validators.required]),
      rollNo: new FormControl('', [Validators.required])
    })
  }

  addStudent(){
    this.submitted = true;
  }

}
