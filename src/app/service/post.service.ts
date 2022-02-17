
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
public baseUrl = "http://localhost:5000/posts";

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

   public addUsers(post: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, post, httpOptions);
  }
}
