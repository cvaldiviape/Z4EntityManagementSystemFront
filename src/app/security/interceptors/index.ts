import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error/error.interceptor";
import { JwtInterceptor } from "./jwt/jwt.interceptor";

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, // indicando el tipo de provider
    useClass: JwtInterceptor, 
    multi: true, // indico que mi aplicacion trabajara con multiples interceptores
  },
  // {
  //   provide: HTTP_INTERCEPTORS, 
  //   useClass: ErrorInterceptor, 
  //   multi: true,
  // }
];

// NOTA: si tenemos varios interceptores, entonces se ejecutaran en el orden que se hayan agregado.