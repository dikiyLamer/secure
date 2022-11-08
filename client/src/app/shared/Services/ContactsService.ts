import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, switchMap } from "rxjs";
import { Message, Person } from "../Interfaces/interfaces";



@Injectable({
    providedIn:'root'
})
export class ContactsService{

    constructor(private http: HttpClient){

    }


    fetch (): Observable<Person[]> {
        return this.http.get<Person[]>('/api/persons')
    }

    getByUid(uid: string): Observable<Person[]>{
        return this.http.get<Person[]>(`/api/persons/${uid}`)
    }

    create(person : Person) {

        return this.http.post<Person>('/api/persons', person)
    }

    update(person : Person) : Observable<Person> {

        return this.http.patch<Person>(`/api/persons/${person.uid}`, person)
    }

    delete(person : Person) : Observable<Message> {

        console.log(person.uid)

        return this.http.delete<Message>(`/api/persons/${person.uid}`)
    }

    
}