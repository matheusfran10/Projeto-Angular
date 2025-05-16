import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/users/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
   let filteredList: IUser[] = [];

   filteredList = filterUsersListByNome(filterOptions.name, usersList);
   filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
   filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
 
   return filteredList;
  }

  const filterUsersListByNome = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;
    
    if(NAME_NOT_TYPED){
      return usersList;
    }
    
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
    
    return filteredList;
  }

 const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
  
    if(STATUS_NOT_SELECTED){
      return usersList;
    }
  
    const filteredList = usersList.filter((user) => user.ativo === status);
  
    return filteredList;
  
  }

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED){
      return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    }))

    return listFiltered;
  }

  export { filterUsersList };
 