import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {
  storyText: string = '';
  photoOne: string = '';
  photoTwo: string = '';
  photoThree: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }
  
  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.storyText = result.storyText;
    this.photoOne = result.photoOne;
    this.photoTwo = result.photoTwo;
    this.photoThree = result.photoThree;
    

  }

}
