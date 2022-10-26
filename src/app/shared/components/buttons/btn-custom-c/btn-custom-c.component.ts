import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-custom-c',
  templateUrl: './btn-custom-c.component.html',
  styleUrls: ['./btn-custom-c.component.css']
})
export class BtnCustomCComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() text: string = "button";
  @Input() type: string = "button";
  @Input() disabled: boolean = false;
  @Output() OnClick = new EventEmitter<string>();
  public textLoading: string = "Loading";

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void{
    this.OnClick.emit();
  }
  
}