import { Component, OnInit } from "@angular/core";
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { CommonService } from "./../services/common.service";

// user interface
import { user } from "../interface/list.interface";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  list: Array<user> = [];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getEntry().subscribe((data: user) => {
      this.list.push(data);
    });
  }
}
