import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CpfValidatorService } from '../services/cpf/cpfValidator.service';

@Injectable({
  providedIn: 'root',
})
export class CpfValidator {
  constructor(private cpfValidatorService: CpfValidatorService) {}

  public validaCpf() {
    return (control: AbstractControl) => {
      if (this.cpfValidatorService.cpfValido(control.value)) {
        return null;
      }

      return { cpfInvalido: { value: control.value } };
    };
  }
}
