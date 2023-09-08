import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @ViewChild('deleteText')
  inputName!: { nativeElement: { value: string; }; };

  constructor() { }

  ngOnInit(): void {
  }

  deletar(){
    this.inputName.nativeElement.value = '';
  }

}
