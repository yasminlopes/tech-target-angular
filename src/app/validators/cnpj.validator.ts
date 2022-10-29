import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CnpjValidatorService } from '../services/cnpj/cnpjValidator.service';

@Injectable({
  providedIn: 'root',
})
export class CnpjValidator {
  constructor(private cnpjValidatorService: CnpjValidatorService) {}

  public validaCnpj() {
     return (control: AbstractControl) => {
      if (this.cnpjValidatorService.cnpjValido(control.value)) {
            return null;
        }
        return { cnpjInvalido: { value: control.value } };
      }
      }
  }
  
 
      
      
