import { inject, Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const users = [
      {id: 3, fname: 'Captain', lname: 'America', avatar:'assets/images/CaptainAmerica.jpg', dob: '16-02-1889'},
      {id: 4, fname: 'Harry', lname: 'Potter', avatar:'assets/images/HarryPotter.jpg', dob: '20-09-1990'},
      {id: 5, fname: 'Hermoine', lname: 'Ginger', avatar:'assets/images/HermioneGranger.jpg', dob: '25-10--1987'},
      {id: 6, fname: 'Ron', lname: 'Wisley', avatar: 'assets/images/RonWeasely.jpg', dob: '17-08-1991'},
      {id: 7, fname: 'Jack', lname: 'Sparrow', avatar: 'assets/images/JackSparrow.jpg', dob: '14-06-1985'},
      {id: 8, fname: 'Christopher', lname: 'Pike', avatar: 'assets/images/ChrisPike.jpg', dob: '29-01-1974'},
      {id: 9, fname: 'Tom', lname: 'Cruise', avatar: 'assets/images/TomCruise.jpg', dob: '16-11-1945'},
      {id: 10, fname: 'Albert', lname: 'Einstein', avatar: 'assets/images/AlbertEinstein.jpg', dob: '11-02-1912'}
    ];

    return {users};
  }

  genId(users: User[]):number{
    
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 9;
  }
  
}
