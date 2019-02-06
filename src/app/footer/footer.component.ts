import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = 'Oleh Maslo';
  year = 2019;

  constructor() {
  }

  ngOnInit() {
  }

}
