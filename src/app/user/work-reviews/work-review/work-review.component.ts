import { Component, OnInit, Input } from '@angular/core';
import { WorkReviewModel } from '../../../dbmodels/work-review-model';

@Component({
  selector: 'app-work-review',
  templateUrl: './work-review.component.html',
  styleUrls: ['../../../bluspecstyles/listing.page.scss',
  '../../../bluspecstyles/listing.shell.scss',
  '../../../bluspecstyles/listing.ios.scss',
  './work-review.component.scss']
})
export class WorkReviewComponent implements OnInit {
  @Input('review') review: WorkReviewModel;
  adminMode = false;
  constructor() { }

  ngOnInit() {
 // console.log("Inside Review Component => "+JSON.stringify(this.review));
  }

}
