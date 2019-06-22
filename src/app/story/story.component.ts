import { Component, OnInit } from '@angular/core';
import * as storyJson from '../../assets/json/story.json';
import * as commonJson from '../../assets/json/common.json';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  title: string;
  date: string;
  content: Array<string>;
  footer: string;
  count: number;

  simple_you: string;
  copyright: string;
  developer: string;
  constructor() {
    this.title = storyJson.title;
    this.date = storyJson.date;
    this.content = storyJson.content;
    this.footer = storyJson.footer;
    this.count = storyJson.count;

    this.simple_you = commonJson.simple_you;
    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }
  ngOnInit() {}
}
