import { Pipe, PipeTransform } from '@angular/core';
import { Padres } from 'src/app/models/padres.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(padress: Padres[],  page: number = 0, search: string = ""): Padres[] {

    if (search.length == 0)
      return padress.slice(page, page + 5);

    const filteredPadres = padress.filter(padr => padr.empleo.includes(search));
    return filteredPadres;
  }
}
