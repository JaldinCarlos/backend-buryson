export const validations = {
  isRequired: {
    es: 'ser requerido',
    en: 'be required'
  },
  isString: {
    es: 'ser string',
    en: 'be string'
  },
  isNumber: {
    es: 'ser numero',
    en: 'be number'
  },
  isEmail: {
    es: 'ser email',
    en: 'be email'
  },
  isEmpty: {
    es: 'ser vacio',
    en: 'be empty'
  },
  isDate: {
    es: 'ser fecha',
    en: 'be date'
  }
}

export const validationMsg = (fieldName, validation, options = {not: false, language: 'en'}) => {
  options.not = options.not || false;
  options.language = options.language || 'en'
  switch (options.language) {
    case 'en':
        return `The field ${fieldName} ${(options.not)? `must not` : 'must'} ${validation.en}`;
    case 'es':
        return `El campo ${fieldName} ${(options.not)? `no debe` : 'debe'} ${validation.es}`;
    default:
        return 'Invalid field';
  }
}




