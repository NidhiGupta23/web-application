import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../services/reqres.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] =[];

  constructor(private reqresService:ReqresService) { 
    this.getUsers();
  }

  getUsers(){
    this.reqresService.getUser().subscribe(
      (res:User[]) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  userDetails( id: number){
      console.log('User id : ', id);
  }

  ngOnInit(): void {
  }

}
