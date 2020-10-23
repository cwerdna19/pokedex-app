import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PokemonCacheService } from './pokemon-cache.service';

@Injectable()
export class PokemonCacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: PokemonCacheService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

        if (cachedResponse) {
            console.log('Returning cached pokemon list.');
            console.log(cachedResponse);
            return of(cachedResponse);
        }

        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log('Adding pokemon to cache.');
                        this.cacheService.put(req.url, event);
                    }
                })
            )

    }
}