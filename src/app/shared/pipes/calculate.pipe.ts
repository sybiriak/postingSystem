import { Pipe, PipeTransform } from '@angular/core';

enum Operation {
  plus = '+',
  minus = '-'
}

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  private regex = new RegExp(/-?[0-9]+[\+\-]+[0-9]+/);

  private index = -1;

  transform(value: string): string {
    return this.transformValue(value);
  }

  private transformValue(value: string): string {
    const match = this.findMatch(value);
    
    if (match) {
      this.index = match.index || -1;
      const calculationResult = this.calculate(match[0]);
      let newValue = this.replace(value, calculationResult);
      const hasContinue = this.findMatch(newValue);
      if (this.index !== hasContinue?.index) {
        newValue = this.addHighlightTag(newValue, calculationResult);
      }
      return this.transformValue(newValue);
    }

    return value;
  }

  private findMatch(value: string): RegExpMatchArray | null {
    return value.match(this.regex);
  }

  private replace(value: string, calculateResult: number | undefined): string {
    return (calculateResult ?? calculateResult === 0) ? value.replace(this.regex, calculateResult.toString()) : value;
  }

  private addHighlightTag(value: string, calculationResult?: number): string {
    if (calculationResult) {
      const startOf = value.slice(0, this.index);
      const endOf = value.slice(this.index);
      const withTag = endOf.replace(calculationResult.toString(), `<mark>${calculationResult}</mark>`);
      return startOf + withTag;
    }
    return value;
  }

  private calculate(value: string): number | undefined {
    const operator = value.match(new RegExp(/\b[\-\+]+\b/));
    
    if (!operator) {
      console.error('Operator parse error, CalculatePipe.calculate');
      return;
    }
    const firstNumberNegative = value.startsWith('-') && operator[0] === Operation.minus;
    const items = value.split(operator[0]);
    if (firstNumberNegative) {
      items.shift();
      items[0] = `-${items[0]}`;
    }
    switch (operator[0]) {
      case Operation.minus:
        return +items[0] - +items[1];
      case Operation.plus:
        return +items[0] + +items[1];
      default: 
       return;
    }
  }
}
