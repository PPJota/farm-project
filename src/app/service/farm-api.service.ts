import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmApiService {

  private today = new Date();

  private url: string = 'http://127.0.0.1:8000/api/';
  private customUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Retrieve a array<entity>
   * @param entity entity name
   * @returns 
   */
  public getFromApi(entity: string): Observable<any> {
    this.customUrl = `${this.url}${entity}`;
    return this.listApi;
  }

  private get listApi(): Observable<any> {
    return this.http.get<any>(this.customUrl,).pipe(
      (res: any) => res,
      (err: any) => err
    )
  }

  /**
   * Delete an Entity 
   * @param entity entity name
   * @param entityId entity id
   * @returns 
   */
  public deleteFromApi(entity: string, entityId: number): Observable<any> {
    return this.http.delete(`${this.url}${entity}/${entityId}`).pipe(res => res, err => err);
  }

  /**
   * Retrieve a Entity 
   * @param entity entity name 
   * @param entityId entity id
   * @returns 
   */
  public getSingleEntity(entity: string, entityId: number): Observable<any> {
    this.customUrl = `${this.url}${entity}/${entityId}`;
    return this.listApi;
  }

  public patchFromApi(entity: string, params: string[], paramsVale: string[]): Observable<any> {
    let httpParams = new HttpParams();
    let httpHeader = new HttpHeaders();
    httpHeader.set('content-type', 'application/merge-patch+json');
    let patchUrl = `${this.url}${entity}`;
    return this.http.patch(patchUrl, httpHeader).pipe(res => res, err => err);
  }

  private getTodayDate(): string {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  }

  public getAnimalsAlive(): Observable<any> {
    this.customUrl = `${this.url}animals?death[after]=`;
    return this.listApi;
  }

  public getAnimalsAliveWeek(farm: string, days: number): Observable<any> {
    var dd = String(this.today.getDate() - days).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    var date = `${yyyy}-${mm}-${dd}`;
    this.customUrl = `${this.url}animals?farm=${farm}&death[after]=${date}`;
    return this.listApi;
  }
}
