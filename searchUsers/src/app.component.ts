import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as angularImg from "../assets/angular-logo.png";

@Component({
  selector: "searchUsers",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class App {
  URL = "https://api.github.com/search/users?q=";
  angularImg: any;
  searchText: any = "google";
  loading = true;
  users = [];

  get(search) {
    return this.httpClient.get(`${this.URL}${search}`);
  }

  setSearchText(value) {
    this.searchText = value;
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  }

  search() {
    this.loading = true;

    const text = this.searchText || "google";
    this.get(text).subscribe((users: any) => {
      this.users = users.items.slice(0, 10);
      this.loading = false;
    });
  }

  constructor(private httpClient: HttpClient) {
    this.angularImg = angularImg;
    this.search();
  }
}
