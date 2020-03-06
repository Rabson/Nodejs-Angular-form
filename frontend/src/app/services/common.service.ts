import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, from } from "rxjs";
import { response } from "./../interface/response.interface";

// interface
import { user } from "./../interface/list.interface";

//  list service
import { ListService } from "./list.service";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  private subject = new Subject<user>();

  constructor(private listService: ListService) {
    this.listService.getList().subscribe((response: response) => {
      if (!response.error) {
        response.data.forEach(element => {
          this.addToTable(element);
        });
      }
    });
  }

  addToTable(entry: user) {
    this.subject.next(entry);
  }

  getEntry(): Observable<user> {
    return this.subject.asObservable();
  }
}
