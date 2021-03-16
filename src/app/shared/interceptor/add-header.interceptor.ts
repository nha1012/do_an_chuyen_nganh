import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements HttpInterceptor {
  getToken() {
    if (localStorage.getItem('access_token'))
      return 'Bearer ' + localStorage.getItem('access_token');
    return 'Bearer ';
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const isReqToUploadImage = req.url === 'https://api.cloudinary.com/v1_1/nha-nguyen/image/upload';
    let clonedRequest = req.clone();
    // Clone the request to add the new header
    if (!isReqToUploadImage) {
      clonedRequest = req.clone({
        headers: req.headers.append('Authorization', this.getToken()),
      });
    }
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
