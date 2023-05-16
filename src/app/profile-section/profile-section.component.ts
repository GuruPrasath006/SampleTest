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

  private swipeCoord: [number, number] | undefined;
  private swipeTime: number | undefined;


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


  /**
  * Method to handle the swipe guestures
  */
  swipe(e: TouchEvent, when: string, id: number): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end' && this.swipeCoord) {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime!;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        direction[0] < 0 ? this.filter(id, 'shortlist') : this.filter(id, 'reject');
      }
    }
  }
}

