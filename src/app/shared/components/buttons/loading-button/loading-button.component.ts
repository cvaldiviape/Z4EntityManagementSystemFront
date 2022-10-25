import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css']
})
export class LoadingButtonComponent implements OnInit {

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
