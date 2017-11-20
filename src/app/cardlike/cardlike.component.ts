import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-cardlike',
  templateUrl: './cardlike.component.html',
  styleUrls: ['./cardlike.component.css']
})
export class CardlikeComponent implements OnInit {
  @Input() imgName:string
  constructor() { }

  ngOnInit() {
  }

}
