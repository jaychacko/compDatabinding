import { Component, OnInit, Input,
  
OnChanges,
 SimpleChanges,
DoCheck,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges  {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string
  constructor() {
    console.log('constructor started')
  }
  ngOnInit() {

    console.log('ng oninit started')

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges started')
    console.log(changes)
  }
  ngDocheck(){
    console.log('do check called')
  }
  ngAfterContentInit(){
    console.log('worked?')
  }
  ngAfterViewInit(){
    console.log('worked2?')
  }
  ngAfterViewChecked(){
    console.log('worked3?')
  }
  ngOnDestroy(){
    console.log('destryoy?')
  }



}
