import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef
  
  onAddServer() {
    
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
      
      //serverContent: this.serverContentInput.nativeElement.value
    })
    // console.log('nameInput12: ', this.serverContentInput)
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
      //serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
