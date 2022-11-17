import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from 'src/app/models/users/userModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri: string;

  constructor(private http : HttpClient) {
    this.uri = environment.url + 'users/'
   }

   saveUser(userModel: userModel):Observable<any>{ 
    return this.http.post<any>(this.uri , userModel);
   } 

   getAll(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.uri);
   }

   deleteById(userId: number): Observable<any> {
    return this.http.delete<any>(this.uri + userId)
   }

}
