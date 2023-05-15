import { Component, Input, OnInit } from '@angular/core';
import * as data from '../mock/profiles.json';
import { Data } from '../models/profileModel'

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnInit {

  public profileMock: Data[] = (data as any).default;

  public id: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.id = history.state.id;
  }

  /**
  * Method to process the profiles
  */
  public filter(i: number, message: string): void {
    if (i < this.profileMock.length) {
      window.alert(message);
      this.id!++;
    } else {
      window.alert('Recommendations completed!');
    }
  }

}

