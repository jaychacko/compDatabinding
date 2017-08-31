import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverContentInput') ServerContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput) {
    console.log(this.ServerContentInput)
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.ServerContentInput.nativeElement.value
      
    });
  }

  onAddBlueprint(serverContentInput) {
    this.bluePrintCreated.emit({
      serverName:serverContentInput.value,
      serverContent:this.ServerContentInput.nativeElement.value
      
    });
  }
}
