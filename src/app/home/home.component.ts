import { Component, OnInit } from "@angular/core";
import * as homeJson from "../../assets/json/home.json";
import * as commonJson from "../../assets/json/common.json";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  home_text: string;
  simple_you: string;
  copyright: string;
  developer: string;
  constructor() {
    this.home_text = homeJson.home_text;
    this.simple_you = commonJson.simple_you;
    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
