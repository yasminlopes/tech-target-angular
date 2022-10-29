import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CpfValidatorService {
  public cpfValido(strCPF: string): boolean {
    if (strCPF.length > 0) {
      let valido = true;
      if (strCPF.length === 11) {
        const cpfInvalido = [
          '00000000000',
          '11111111111',
          '22222222222',
          '33333333333',
          '44444444444',
          '55555555555',
          '66666666666',
          '77777777777',
          '88888888888',
          '99999999999',
        ];

        for (let i = 0; i < 10; i++)
          if (strCPF === cpfInvalido[i]) return !valido;

        let soma = 0;
        for (let i = 0; i < 9; i++)
          soma = soma + parseInt(strCPF.charAt(i), 10) * (10 - i);

        let dv = 0;
        if (soma % 11 > 1) dv = 11 - (soma % 11);

        if (parseInt(strCPF.charAt(9), 10) !== dv) return !valido;

        soma = 0;

        for (let i = 0; i < 10; i++)
          soma = soma + parseInt(strCPF.charAt(i), 10) * (11 - i);

        dv = 0;

        if (soma % 11 > 1) dv = 11 - (soma % 11);

        if (parseInt(strCPF.charAt(10), 10) !== dv) return !valido;

        valido = true;
      }
      return valido;
    }
    return true;
  }
}
