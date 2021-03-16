import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HinhAnhSanPhamCloudinaryService {
  constructor(private http: HttpClient) { }
  upLoadFile(vals): Observable<any> {
    const URL = 'https://api.cloudinary.com/v1_1/nha-nguyen/image/upload';
    return this.http.post(URL, vals);
  }
}
