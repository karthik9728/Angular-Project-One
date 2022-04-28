import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName= 'Test Server';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created,Server Name is ' + this.serverName;
  }

  onUpdateServerName(event:any){
    console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value
  }

}
