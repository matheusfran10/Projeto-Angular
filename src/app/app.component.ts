import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/users/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(){
   setTimeout(() => {
    this.usersList = UsersList;
    this.usersListFiltered = this.usersList;
   }, 1)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions){
    console.log(filterOptions);

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
   let filteredList: IUser[] = [];

   filteredList = this.filterUsersListByNome(filterOptions.name, usersList);

   return filteredList;
  }
  
  filterUsersListByNome(name: string | undefined, usersList: IUser[]): IUser[] {
   const NAME_NOT_TYPED = name === undefined;

   if(NAME_NOT_TYPED){
    return usersList;
   }

   const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))

   return filteredList;
  }
}
