import { Pipe, PipeTransform } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';

@Pipe({
  name: 'filtropro'
})
export class FiltroproPipe implements PipeTransform {

  transform(profesoress: Profesor[], page: number = 0, search: string = ""): Profesor[] {

    if (search.length == 0)
      return profesoress.slice(page, page + 5);

    const filteredProfesores = profesoress.filter(prof => prof.profesores.includes(search));
    return filteredProfesores;
  }
}
