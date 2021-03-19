import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Observable } from 'rxjs';
import { userInterface } from '../../models/user-model.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myData: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   this.apiService.getJsonFromDummyApi().subscribe(data =>{
     console.log(data);
   this.myData = data;
   });
      
  }

}
