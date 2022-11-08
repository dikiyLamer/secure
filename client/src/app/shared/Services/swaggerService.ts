import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, switchMap } from "rxjs";
import { Message, Person } from "../Interfaces/interfaces";



@Injectable({
    providedIn:'root'
})
export class SwaggerService{

    constructor(private http: HttpClient){

    }

    getSwaggerPage () {
        return this.http.get('/api/person').subscribe(data=>console.log(data))
    }
}