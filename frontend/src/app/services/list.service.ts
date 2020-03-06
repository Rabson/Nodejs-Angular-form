import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { user } from "../interface/list.interface";

@Injectable({
  providedIn: "root"
})
export class ListService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get("http://localhost:3000/list");
  }

  postList(data: user) {
    return this.http.post("http://localhost:3000/list", data);
  }
}
