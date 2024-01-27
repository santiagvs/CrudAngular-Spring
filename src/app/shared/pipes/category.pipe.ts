import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Programming': return 'code';
      case 'Web Development': return 'computer';
    }

    return 'code';
  }

}
