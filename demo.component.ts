import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  posts=[];


  
  constructor( http:HttpClient) { 

    http.get<any>('https://raw.githubusercontent.com/yogesh6717/Test1/master/data.properties').subscribe(data => {
      this.posts=data;

    })
  }
  ngOnInit() {
 
  }
 
}
