import { Component, OnInit } from '@angular/core';
import * as projJson from '../../../../assets/json/proj.json';
import * as commonJson from '../../../../assets/json/common.json';

@Component({
  selector: 'app-proj4',
  templateUrl: './proj4.component.html',
  styleUrls: ['./proj4.component.css']
})
export class Proj4Component implements OnInit {
  title: string;
  content: Array<string>;
  count: number;

  copyright: string;
  developer: string;

  constructor() {
    this.title = projJson[3].title;
    this.content = projJson[3].content;
    this.count = projJson[3].count;

    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
