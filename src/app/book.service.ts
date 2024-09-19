import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private _HttpClient: HttpClient) {}
  getAllBook(): Observable<any> {
    return this._HttpClient.get(`https://ahmedbooks.runasp.net/api/Books`);
  }
  postBook(bookData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ahmedbooks.runasp.net/api/Books`,
      bookData
    );
  }
  BookDetails(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ahmedbooks.runasp.net/api/Books/${id}`
    );
  }
  search(query: string): Observable<any> {
    return this._HttpClient.get(
      `https://ahmedbooks.runasp.net/api/Books/q=${query}`
    );
  }
  Allcategories(): Observable<any> {
    return this._HttpClient.get(
      `https://ahmedbooks.runasp.net/api/Books/category`
    );
  }
  AllAuthors(): Observable<any> {
    return this._HttpClient.get(
      `https://ahmedbooks.runasp.net/api/Books/Authors`
    );
  }
}
