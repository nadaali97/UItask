import { Component, Input} from '@angular/core';
import { responseModel } from '../service/responseModel.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { }

  @Input() inputData:responseModel | null=null;
}
