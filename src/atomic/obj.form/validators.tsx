import {
  isCnpjPatternValid,
  isCnsValid,
  isCpfPatternValid,
  isDateValid,
  isDDValid,
  isEmailValid,
  isHeightValid,
  isNameValid,
  isPasswordValid,
  isPhoneValid,
  isSocialSecurityNumberValid,
  isWeightValid,
  isZipCodeValid,
  maxDate,
} from './regex-validator';

export interface Validator {
  error: ValidationError;
  validationFn: any;
}

export interface ValidationError {
  name: string;
  message: string;
}

export class Validators {
  static MaxLength(length: number, message: string): Validator {
    return {
      error: {
        name: 'MaxLength',
        message,
      },
      validationFn: (value: any) => {
        return !value || value.toLocaleString().length <= length;
      },
    };
  }

  static LettersOnly(acceptSpace: boolean, message: string): Validator {
    return {
      error: {
        name: 'LettersOnly',
        message,
      },
      validationFn: (value: any) => {
        return value?.match(
          acceptSpace ? /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s]*$/ : /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]*$/,
        );
      },
    };
  }

  static MinLength(length: number, message: string): Validator {
    return {
      error: {
        name: 'MinLength',
        message,
      },
      validationFn: (value: any) => {
        return !value || value.toLocaleString().length >= length;
      },
    };
  }

  static HeightRegex(message: string): Validator {
    return {
      error: {
        name: 'HeightRegex',
        message,
      },
      validationFn: (value: any) => {
        return isHeightValid(value);
      },
    };
  }

  static WeightRegex(message: string): Validator {
    return {
      error: {
        name: 'WeightRegex',
        message,
      },
      validationFn: (value: any) => {
        return isWeightValid(value);
      },
    };
  }

  static Required(message?: string): Validator {
    return {
      error: {
        name: 'Required',
        message: message || 'Required',
      },
      validationFn: (value: any) => {
        if (!value?.length) {
          return false;
        }
        return (value && Object.keys(value).length > 0) || (value && !isNaN(value)) || value instanceof Date;
      },
    };
  }

  static EmailRegex(message: string): Validator {
    return {
      error: {
        name: 'EmailRegex',
        message,
      },
      validationFn: (value: any) => {
        return isEmailValid(value);
      },
    };
  }

  static CpfPatternRegex(message: string): Validator {
    return {
      error: {
        name: 'Cpf pattern regex',
        message,
      },
      validationFn: (value: any) => {
        return isCpfPatternValid(value);
      },
    };
  }

  static CnpjPatternRegex(message: string): Validator {
    return {
      error: {
        name: 'Cnpj pattern regex',
        message,
      },
      validationFn: (value: any) => {
        return isCnpjPatternValid(value);
      },
    };
  }

  static ZipCodeRegex(message: string): Validator {
    return {
      error: {
        name: 'Zip code regex',
        message,
      },
      validationFn: (value: any) => {
        return isZipCodeValid(value);
      },
    };
  }
  static PhoneRegex(message: string): Validator {
    return {
      error: {
        name: 'PhoneRegex',
        message,
      },
      validationFn: (value: any) => {
        return isPhoneValid(value);
      },
    };
  }

  static DDRegex(message: string): Validator {
    return {
      error: {
        name: 'DDRegex',
        message,
      },
      validationFn: (value: any) => {
        return isDDValid(value);
      },
    };
  }

  static PasswordRegex(message: string): Validator {
    return {
      error: {
        name: 'PasswordRegex',
        message,
      },
      validationFn: (value: any) => {
        return isPasswordValid(value);
      },
    };
  }

  static FullNameRegex(message: string): Validator {
    return {
      error: {
        name: 'FullNameRegex',
        message,
      },
      validationFn: (value: any) => {
        return isNameValid(value);
      },
    };
  }

  static DateRegex(message: string): Validator {
    return {
      error: {
        name: 'DateRegex',
        message,
      },
      validationFn: (value: any) => {
        return isDateValid(value);
      },
    };
  }

  static MaxDate(max: Date, message: string): Validator {
    return {
      error: {
        name: 'MaxDate',
        message,
      },
      validationFn: (value: any) => {
        return !value || maxDate(max, value);
      },
    };
  }

  static IsNotEqualToField(valueToCompare: any, message: string): Validator {
    return {
      error: {
        name: 'IsNotEqualToField',
        message,
      },
      validationFn: (value: any) => {
        return value === valueToCompare;
      },
    };
  }

  // Validates Brazilian social security number
  // static SocialSecurityNumberRegex(message?: string): Validator {
  //   return {
  //     error: {
  //       name: 'SocialSecurityNumberRegex',
  //       message,
  //     },
  //     validationFn: (value: any) => {
  //       return isSocialSecurityNumberValid(value);
  //     },
  //   };
  // }

  // static CnsRegex(message?: string): Validator {
  //   return {
  //     error: {
  //       name: 'CnsRegex',
  //       message,
  //     },
  //     validationFn: (value: any) => {
  //       return !value || isCnsValid(value);
  //     },
  //   };
  // }
}
