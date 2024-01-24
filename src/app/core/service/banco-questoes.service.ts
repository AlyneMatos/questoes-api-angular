import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BancoQuestoes } from '../models/banco-questoes';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoQuestoesService {
  private readonly API = 'api/questoes';

  constructor(private httpClient: HttpClient) {}

  list() : Observable<BancoQuestoes[]> {
    return this.httpClient.get<BancoQuestoes[]>(this.API).pipe(
      first(),
      //tap((courses) => console.log(courses))
    );
  }

  verificarItemCorreto(id: number, item: string): Observable<string> {
    return this.httpClient.get<string>(`${this.API}/item/${id}?item=${item}`);
  }
}
