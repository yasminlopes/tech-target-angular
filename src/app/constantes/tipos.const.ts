import { Tipos } from "../model/tipos.model";

export const TIPOS: Tipos[] = [
    { id: 1, descricao: 'Numérico', disabled: false},
    { id: 2, descricao: 'Quantitativa', disabled: true },
    { id: 3, descricao: 'Qualitativa', disabled: true }
]

export const NUMERICO = [
    { value: 1, name: 'num1', checked: true},
    { value: 2, name: 'num2', checked: false},
    { value: 3, name: 'num3', checked: false},
    { value: 4, name: 'num4', checked: false},
    { value: 5, name: 'num5', checked: false},
]

export const QUANTITATIVA = [
    { value: 'Sempre', name: 'quant1', checked: true},
    { value: 'Muitas vezes', name: 'quant2', checked: false},
    { value: 'Algumas vezes', name: 'quant3', checked: false},
    { value: 'Poucas vezes', name: 'quant4', checked: false},
    { value: 'Nunca', name: 'quant5', checked: false},
]

export const QUALITATIVA = [
    { value: 'Discordo totalmente', name: 'qual1', checked: true},
    { value: 'Discordo', name: 'qual2', checked: false},
    { value: 'Indiferente', name: 'qual3', checked: false},
    { value: 'Concordo', name: 'qual4', checked: false},
    { value: 'Concordo plenamente', name: 'qual5', checked: false},
]