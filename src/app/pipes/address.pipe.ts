import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/users/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = 
    !address || 
    !address.rua || 
    !address.cidade || 
    !address.estado ||
    address.numero === null || address.numero === undefined;

    if(INVALID_ADDRESS) {
      return 'Endereço não disponível ou inválido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`
  }

}
