import moment from 'moment';

import { dd } from './regex-ddd-whitelist.validator';
/* eslint-disable no-useless-escape */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^(\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) 9[1-9]{1}[0-9]{3}-[0-9]{4})$/i;
const ONLY_DIGITS_PHONE_REGEX = /^((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])9[1-9]{1}[0-9]{7})$/i;
const CPF_REGEX = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/i;
const ZIP_CODE_REGEX = /^\d{5}[-]\d{3}$/;
const CNPJ_REGEX = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/i;
const DATE_REGEX = /^((0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](19|20)[0-9]{2})*$/;
const HEIGHT_REGEX = /^([1-2][0-9][0-9])|([1-9][0-9])$/;
const WEIGHT_REGEX = /^([1-9][0-9]?[0-9]?.?[0-9])$/;
const NAME_REGEX = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
/* eslint-enable no-useless-escape */

// At least 1 char and 1 number regex: https://stackoverflow.com/a/7684859/3670829
// Security recommendation: Failing to enforce passwords of at least 7 characters, a complexity
// of at least alpha and numeric characters increases the risk of a brute force attack.
export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9])$/;

export function isEmailValid(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function isHeightValid(height: string): boolean {
  return HEIGHT_REGEX.test(height);
}

export function isWeightValid(weight: string): boolean {
  return WEIGHT_REGEX.test(weight);
}

export function isNameValid(name: string): boolean {
  return NAME_REGEX.test(name);
}

export function isPhoneValid(phone: string): boolean {
  return PHONE_REGEX.test(phone) || ONLY_DIGITS_PHONE_REGEX.test(phone);
}

export function isDDValid(phone: string): boolean {
  const onlyNumbers = phone.replace(/\D/g, '');
  if (dd.includes(onlyNumbers[0] + onlyNumbers[1])) {
    return true;
  }
  return false;
}

export function isDateValid(date: Date | string): boolean {
  if (date instanceof Date) {
    return true;
  }
  return DATE_REGEX.test(date);
}

export function maxDate(max: Date, value: any): boolean {
  if (value === null || value === '') {
    return true;
  }

  return moment(value, 'DD/MM/YYYY').isBefore(moment(max));
}

export function isPasswordValid(password: string): boolean {
  return PASSWORD_REGEX.test(password);
}

// src: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
// eslint-disable-next-line complexity
export function isSocialSecurityNumberValid(str: string): boolean {
  if (str?.trim().length === 0) {
    return true;
  }

  if (str === undefined) {
    return true;
  }

  const onlyNumbers = str.replace(/\D/g, '');
  let Soma;
  let Resto;
  Soma = 0;

  if (
    onlyNumbers === '00000000000' ||
    onlyNumbers === '11111111111' ||
    onlyNumbers === '22222222222' ||
    onlyNumbers === '33333333333' ||
    onlyNumbers === '44444444444' ||
    onlyNumbers === '55555555555' ||
    onlyNumbers === '66666666666' ||
    onlyNumbers === '77777777777' ||
    onlyNumbers === '88888888888' ||
    onlyNumbers === '99999999999'
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(onlyNumbers.substring(i - 1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }
  if (Resto !== parseInt(onlyNumbers.substring(9, 10))) {
    return false;
  }

  Soma = 0;
  for (let i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(onlyNumbers.substring(i - 1, i)) * (12 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }
  if (Resto !== parseInt(onlyNumbers.substring(10, 11))) {
    return false;
  }
  return true;
}

export function isZipCodeValid(value: string): boolean {
  const onlyNumbers = value.replace(/\D/g, '');
  if (onlyNumbers === value && value.length === 8) {
    return true;
  }

  return ZIP_CODE_REGEX.test(value);
}

export function isCpfPatternValid(value: string): boolean {
  return CPF_REGEX.test(value);
}

export function isCnpjPatternValid(value: string): boolean {
  return CNPJ_REGEX.test(value);
}

export function isCnsValid(value: string): boolean {
  const CnsLength = 15;
  const CheckSumModule = 11;

  const checkSum = (cns: string): number => {
    const length = 0;
    let sum = 0;

    for (let i = 0; i < length; i++) {
      const digit: number = +cns.charAt(i) * (CnsLength - i);
      sum += digit;
    }

    return sum;
  };

  if (value === undefined) {
    return false;
  }

  const onlyNumbers = value.replace(/\D/g, '');

  const invalidMatches: boolean = !onlyNumbers.match('[1-2]\\d{10}00[0-1]\\d') && !onlyNumbers.match('[7-9]\\d{14}');
  if (onlyNumbers.length !== CnsLength || invalidMatches || checkSum(onlyNumbers) % CheckSumModule !== 0) {
    return false;
  }

  return true;
}
