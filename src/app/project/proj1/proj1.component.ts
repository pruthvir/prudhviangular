import { Component, OnInit } from "@angular/core";
import * as projJson from "../../../assets/json/proj.json";
import * as commonJson from "../../../assets/json/common.json";

@Component({
  selector: "proj1",
  templateUrl: "./proj1.component.html",
  styleUrls: ["./proj1.component.css"]
})
export class Proj1Component implements OnInit {
  title: string;
  content: Array<string>;
  count: number;

  copyright: string;
  developer: string;

  constructor() {
    this.title = projJson[0].title;
    this.content = projJson[0].content;
    this.count = projJson[0].count;

    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
