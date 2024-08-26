import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  get = (): Observable<Item[]> => this.http.get<Item[]>("item")

  add = (item: Item): Observable<Item> => this.http.post<Item>("item", item)

  update = (item: Item): Observable<Item> => this.http.put<Item>(`item/${item.id}`, item)

  delete = (id: string): Observable<Item> => this.http.delete<Item>(`item/${id}`)
}
