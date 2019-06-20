import { Component, OnInit } from "@angular/core";
import * as commonJson from "../../assets/json/common.json";
import * as storyJson from "../../assets/json/story.json";
import * as playJson from "../../assets/json/play.json";

@Component({
  selector: "play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  big_title: string;
  small_title: string;
  content: Array<string>;
  instagram: string;
  instagram_url: string;
  twitter_text1: string;
  twitter_text2: string;
  twitter_url1: string;
  twitter_url2: string;
  facebook_url: string;
  posted_by: string;
  posted_time: string;
  story_footer: string;

  story_title: string;

  firstname: string;
  lastname: string;
  simple_you: string;
  address: string;
  email: string;
  copyright: string;
  developer: string;
  constructor() {
    this.big_title = playJson.big_title;
    this.small_title = playJson.small_title;
    this.content = playJson.content;
    this.instagram = playJson.instagram;
    this.instagram_url = playJson.instagram_url;
    this.twitter_text1 = playJson.twitter_text1;
    this.twitter_text2 = playJson.twitter_text2;
    this.twitter_url1 = playJson.twitter_url1;
    this.twitter_url2 = playJson.twitter_url2;
    this.facebook_url = playJson.facebook_url;
    this.posted_by = playJson.posted_by;
    this.posted_time = playJson.posted_time;
    this.story_footer = playJson.story_footer;

    this.story_title = storyJson.title;

    this.firstname = commonJson.firstname;
    this.lastname = commonJson.lastname;
    this.simple_you = commonJson.simple_you;
    this.address = commonJson.address;
    this.email = commonJson.email;
    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }

  ngOnInit() {}
}
