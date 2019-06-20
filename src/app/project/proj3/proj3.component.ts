import { Component, OnInit } from "@angular/core";
import * as projJson from "../../../assets/json/proj.json";
import * as commonJson from "../../../assets/json/common.json";

@Component({
  selector: "proj3",
  templateUrl: "./proj3.component.html",
  styleUrls: ["./proj3.component.css"]
})
export class Proj3Component implements OnInit {
  title: string;
  content: Array<string>;
  count: number;

  copyright: string;
  developer: string;

  constructor() {
    this.title = projJson[2].title;
    this.content = projJson[2].content;
    this.count = projJson[2].count;

    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
