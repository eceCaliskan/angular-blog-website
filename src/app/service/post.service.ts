
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './../Blog';
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

  public getUsers(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.baseUrl);
  }

   public addUsers(post: any): Observable<Blog[]> {
    return this.httpClient.post<Blog[]>(this.baseUrl, post, httpOptions);
  }

  public getPost(id: number): Observable<Blog[]> {
    this.baseUrl = `http://localhost:5000/posts/`+ id;

    return this.httpClient.get<Blog[]>(this.baseUrl);

  }
}
