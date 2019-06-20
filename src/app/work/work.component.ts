import { Component, OnInit } from "@angular/core";

import * as workJson from "../../assets/json/work.json";
import * as commonJson from "../../assets/json/common.json";

@Component({
  selector: "work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {
  job_title: string;
  job_description: string;
  job_content: string;
  about_title: string;
  about_content: string;
  skills: Array<object>;
  skill_detail: Array<object>;
  languages: Array<object>;
  projects_done: number;
  associated_organisations: number;
  events: number;
  meetings: number;
  work_text: string;
  proj1_text: string;
  proj2_text: string;
  proj3_text: string;
  proj4_text: string;
  resume_url: string;
  app_text1: string;
  app_text2: string;
  link_url: string;
  facebook_url: string;
  instagram_url: string;
  snapchat_url: string;
  twitter_url: string;

  address: string;
  email: string;
  copyright: string;
  developer: string;

  constructor() {
    this.job_title = workJson.job_title;
    this.job_description = workJson.job_description;
    this.job_content = workJson.job_content;
    this.about_title = workJson.about_title;
    this.about_content = workJson.about_content;
    this.skills = workJson.skills;
    this.skill_detail = workJson.skill_detail;
    this.languages = workJson.languages;
    this.projects_done = workJson.projects_done;
    this.associated_organisations = workJson.associated_organisations;
    this.events = workJson.events;
    this.meetings = workJson.meetings;
    this.work_text = workJson.work_text;
    this.proj1_text = workJson.proj1_text;
    this.proj2_text = workJson.proj2_text;
    this.proj3_text = workJson.proj3_text;
    this.proj4_text = workJson.proj4_text;
    this.resume_url = workJson.resume_url;
    this.app_text1 = workJson.app_text1;
    this.app_text2 = workJson.app_text2;
    this.link_url = workJson.link_url;
    this.facebook_url = workJson.facebook_url;
    this.instagram_url = workJson.instagram_url;
    this.snapchat_url = workJson.snapchat_url;
    this.twitter_url = workJson.twitter_url;

    this.address = commonJson.address;
    this.email = commonJson.email;
    this.copyright = commonJson.copyright;
    this.developer = commonJson.developer;
  }

  ngOnInit() {}
}
