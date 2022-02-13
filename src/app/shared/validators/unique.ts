import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function uniqueValidator(list: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isNotUnique = control.value && list?.includes(control.value);
    return isNotUnique ? {notUnique: {value: control.value}} : null;
  };
}
