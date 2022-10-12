import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { responseModel } from '../service/responseModel.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  dataList:responseModel[]=[]
  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.dispatchApiCall();
  }
  
  dispatchApiCall(): void{
  this.service.getData().subscribe((data:any)=>{
    this.dataList=data;
    });
}
}
