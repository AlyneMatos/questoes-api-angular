import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Método para realizar o login
  // login(username: string, password: string): Observable<boolean> {
  //   // Simples lógica de autenticação (usuário: "user", senha: "123")
  //   const isAuthenticated = username === 'user' && password === '123';

  //   // Atualiza o estado de autenticação
  //   this.isAuthenticatedSubject.next(isAuthenticated);

  //   // Retorna o estado de autenticação como um Observable
  //   return this.isAuthenticatedSubject.asObservable();
  // }

  // // Método para verificar o estado de autenticação
  // isAuthenticated(): Observable<boolean> {
  //   return this.isAuthenticatedSubject.asObservable();
  // }
}
