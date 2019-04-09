
import { Component } from '@angular/core';
import { Job } from './model/job';
import { Http } from '@angular/http';
import { About } from './model/about';
import { Stats } from './model/stats';

import { Chart } from 'chart.js';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {


  //Private fields for the different interfaces (models).

  private jobs: Job[];
  private info: About[];
  private stats: Stats[];


   //Selected job variable
   private selectedJob : Job;
   

  //Contructor that implements http variable of type Http. 

  constructor(http:Http){

    

    //OperationId: jobs.get - URI jobs to get all DB jobs.

     http.get('http://localhost:5000/v0/jobs').subscribe(result => {
       this.jobs = result.json() as Job[];
     });

    //OperationId about.get

     http.get('http://localhost:5000/about').subscribe(result => {
       this.info = result.json() as About[]; 
    } );

     http.get('http://localhost:5000/v0/stats').subscribe(result => {
       this.stats = result.json() as Stats[]; 
    } );
  }

  //Method onSelect that binds the click event to show job details.
  onSelect(job:Job): void{
    this.selectedJob = job;
  }


  
}
