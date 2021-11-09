import { Pipe, PipeTransform } from '@angular/core';
import { Madres } from 'src/app/models/madres.model';

@Pipe({
  name: 'filtross'
})
export class FiltrossPipe implements PipeTransform {

  transform(madress: Madres[], page: number = 0, search: string = ""): Madres[] {

    if (search.length == 0)
      return madress.slice(page, page + 5);

    const filteredMadres = madress.filter(madr => madr.madres.includes(search));
    return filteredMadres;
  }
}