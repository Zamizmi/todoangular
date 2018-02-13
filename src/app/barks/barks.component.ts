import { Component, OnInit } from '@angular/core';
import { Bark } from '../bark';

@Component({
  selector: 'app-barks',
  templateUrl: './barks.component.html',
  styleUrls: ['./barks.component.css']
})
export class BarksComponent implements OnInit {
  barks: Bark[] = [{
      id: 1,
      name: 'jest',
      completed: false,
      created_at: new Date()
    },
    {
      id: 2,
      name: 'Jargel',
      completed: true,
      created_at: new Date()
    },
    {
      id: 3,
      name: 'Sebuuusta',
      completed: false,
      created_at: new Date()
    }
  ]
  selectedBark: Bark;

  onSelect(bark: Bark): void {
    this.selectedBark = bark;
  }

  constructor() { }

  ngOnInit() {
  }

}
