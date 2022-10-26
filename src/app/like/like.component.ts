import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  like = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  likeThis() {
    this.like++;
  }

}
