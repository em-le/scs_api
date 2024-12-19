import { Transform } from 'class-transformer';
import { isArray, map, trim, isNil, castArray } from 'lodash';

export function ToUpperCase(): PropertyDecorator {
  return Transform(
    (params) => {
      const value = params.value;
      if (!value) {
        return;
      }
      if (Array.isArray(value)) {
        return value.map((item) => item.toUpperCase());
      }
      return value.toUpperCase();
    },
    { toClassOnly: true },
  );
}

export function ToLowerCase(): PropertyDecorator {
  return Transform(
    (params) => {
      const value = params.value;
      if (!value) {
        return;
      }
      if (Array.isArray(value)) {
        return value.map((item) => item.toLowerCase());
      }
      return value.toLowerCase();
    },
    { toClassOnly: true },
  );
}

export function Trim(): PropertyDecorator {
  return Transform(
    (params) => {
      const value = params.value as string[] | string;
      if (isArray(value)) {
        return map(value, (item) => trim(item).replace(/\s\s+/g, ' '));
      }
      return trim(value).replace(/\s\s+/g, ' ');
    },
    { toClassOnly: true },
  );
}

export function ToArray(): PropertyDecorator {
  return Transform(
    (param) => {
      const value = param.value;
      if (isNil(value)) {
        return [];
      }
      return castArray(value);
    },
    { toClassOnly: true },
  );
}

export function ToBoolean(): PropertyDecorator {
  return Transform(
    (param) => {
      switch (param.value) {
        case 'true':
          break;
        case 'false':
          break;
        default:
          return !!param.value;
      }
    },
    { toClassOnly: true },
  );
}
