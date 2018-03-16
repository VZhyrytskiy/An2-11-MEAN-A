import { Component } from '@angular/core';
import { ApiService } from '../../core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postMsg = '';

  constructor(public api: ApiService) {}

  post() {
    this.api.postMessage({ msg: this.postMsg });
  }
}
