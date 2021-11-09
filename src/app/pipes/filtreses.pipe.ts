import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';

@Pipe({
  name: 'filtreses'
})
export class FiltresesPipe implements PipeTransform {

  transform(estudiantess: Estudiante[], page: number = 0, search: string = ""): Estudiante[] {

    if (search.length == 0)
      return estudiantess.slice(page, page + 5);

    const filteredEstudiantes = estudiantess.filter(estd => estd.estudiantes.includes(search));
    return filteredEstudiantes;
  }
}