import { Pipe, PipeTransform } from '@angular/core';
import { Registros } from 'src/app/models/registro.model';

@Pipe({
  name: 'filtromen'
})
export class FiltromenPipe implements PipeTransform {

  transform(registross: Registros[], page: number = 0, search: string = ""): Registros[] {

    if (search.length == 0)
      return registross.slice(page, page + 5);

    const filteredRegistros = registross.filter(regsd => regsd.nombre.includes(search));
    return filteredRegistros;
  }
}