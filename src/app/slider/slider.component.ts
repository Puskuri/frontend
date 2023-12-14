import { Component } from '@angular/core';
import { Topic } from '../topic';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  topics: Array<Topic> = new Array();

  constructor() {

    this.topics.push(new Topic('kysymys1'));
    this.topics.push(new Topic('kysymys2'));
    this.topics.push(new Topic('kysymys3'));

  }

  onInputChange(event: any, topic: Topic) {
    topic.vastaus(event.target.value);
  }

}
