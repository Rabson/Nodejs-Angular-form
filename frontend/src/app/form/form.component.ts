import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonService } from "./../services/common.service";
import { ListService } from "./../services/list.service";
import { response } from "../interface/response.interface";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  entryForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      middleName: ["", Validators.required],
      gender: ["male"]
    });
  }

  get f() {
    return this.entryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.entryForm.invalid) {
      return;
    }

    const data = {
      id: new Date().getTime(),
      ...this.entryForm.value
    };

    this.commonService.addToTable(data);
    this.entryForm.reset();
    this.submitted = false;
    this.listService.postList(data).subscribe((response: response) => {
      // perform action after server response.
    });
  }
}
