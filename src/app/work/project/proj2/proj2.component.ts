import { Component, OnInit } from '@angular/core';
import * as projJson from '../../../../assets/json/proj.json';
import * as commonJson from '../../../../assets/json/common.json';

@Component({
  selector: 'app-proj2',
  templateUrl: './proj2.component.html',
  styleUrls: ['./proj2.component.css']
})
export class Proj2Component implements OnInit {
  title: string;
  content: Array<string>;
  count: number;
  copyright: string;
  developer: string;

  constructor() {
    this.title = projJson[1].title;
    this.content = projJson[1].content;
    this.count = projJson[1].count;

    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
