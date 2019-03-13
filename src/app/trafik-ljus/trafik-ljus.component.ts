import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trafik-ljus',
  templateUrl: './trafik-ljus.component.html',
  styleUrls: ['./trafik-ljus.component.css']
})
export class TrafikLjusComponent implements OnInit {
  value: number = 0;
  green = false;
  red = true;
  yellow = false;

  constructor() {
  }

  ngOnInit() {
  }

  ClickToDrive() {
    if (this.value === 0) {
      this.value++;
      this.green = true;
      this.yellow = true;
      this.red = false;
      console.log('green and yellow ' + this.value);
    } else if (this.value === 1) {
      this.value++;
      this.green = true;
      this.red = false;
      this.yellow = false;
      console.log('green ' + this.value);

    } else if (this.value > 1) {

      this.value = 0;
      console.log('red ' + this.value);
      this.red = true;
      this.yellow = false;
      this.green = false;
    }


  }

}
