import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No server was created';
  server_Name='testServer';
  serverCreated=false;

  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;},2000)

  }


  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='server was created! Name is' + this.server_Name;
  }

  onUpdateServerName(event:Event){
    //console.log(event);
    this.server_Name=(<HTMLInputElement>event.target).value;
  }

}
