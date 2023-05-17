import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit{
  public valeur: string = '';
  private _filter: string = '';

  @ViewChild('myInput', { static: true }) public inputText: ElementRef = <ElementRef>{};
  @ViewChild(NgModel, { static: true }) public inputModel!: NgModel;

  constructor() {}

  ngOnInit(): void {

    const test = this.inputText.nativeElement.value = this.inputModel.control.valueChanges;
    // this.inputModel.control.valueChanges.subscribe(console.log);
    console.log(this.inputModel);
  }

  public get filter(): string {
    return this._filter;
  }


  public set filter(value: string) {
    this._filter = value;
    this.valeur = this._filter;

    // console.log('input:: ', this._filter);
  }

}
