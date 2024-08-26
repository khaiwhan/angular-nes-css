import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const prefixInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  if (!/^(http|https):/i.test(req.url)) {
    req = req.clone({ url: `https://66c7f957732bf1b79fa7e2b9.mockapi.io/${req.url}` });
  }
  return next(req);
};
