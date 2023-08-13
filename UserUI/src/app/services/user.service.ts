import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url = "https://localhost:7165/api/Test";//"Test";//"https://localhost:7165/api/Test"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:7165/api/Test");//(`${environment.apiUrl}/${this.url}`);
  }

  public saveUser(user: User): Observable<User[]> {
    return this.http.post<User[]>("https://localhost:7165/api/Test", //(`${environment.apiUrl}/${this.url}`,
      user
    );
  }
}
