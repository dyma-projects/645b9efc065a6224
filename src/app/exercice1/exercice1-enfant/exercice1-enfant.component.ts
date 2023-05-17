import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() valueChangeAdd = new EventEmitter();
  @Output() valueChangeSubstract = new EventEmitter();
  counter = 0;

  valueChanged() {
    this.valueChange.emit(this.counter);
  }

  valueChangedAdd() {
    this.counter = this.counter + 1;
    this.valueChangeAdd.emit(this.counter);
  }

  valueChangedSubstract() {
    this.counter = this.counter - 1;
    this.valueChangeSubstract.emit(this.counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
