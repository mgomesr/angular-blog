import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() photoCover: string = '';
  @Input() altCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardPlatafform: string = '';
  @Input() cardDescription: string = '';
  @Input() Id: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
