import { Component, OnInit } from '@angular/core';
import * as data from '../mock/profiles.json';
import { Router } from '@angular/router';
import { Data } from '../models/profileModel'

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss']
})
export class RecommendationSectionComponent implements OnInit {

  public profileMock: Data[] = (data as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  /**
  * Method to navigate to a specific profile
  */
  public selectedProfile(i: number): void {
    this.router.navigateByUrl('/profile', { state: { id: i - 1 } });
  }

}
