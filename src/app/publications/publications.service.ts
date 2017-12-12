import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Publication, PublicationResponse } from './publication.model';

@Injectable()
export class PublicationService {
    url = 'http://openlibrary.org/search.json?q=';

    constructor(private http: Http) { }

    getPublications(publicationName: string): Observable<PublicationResponse> {
        return this.http.get(`${this.url}${publicationName}`)
            .map(response => response.json())
            .catch(error => error);
    }
}