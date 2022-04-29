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
  userName="";
  mark = false;
  serverStatus = '';
  color='';

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

  onResetButton(){
    this.userName = ''
  }

  onShowMe(){
    this.mark = !this.mark ? this.mark = true : this.mark = false;
    // if(!this.mark){
    //   this.mark= true;
    // }else{
    //   this.mark = false;
    // }
  }

  onColor(){
    if(Math.random() > 0.5){
      this.serverStatus='Server Online';
      return this.color='green';
    }else{
      this.serverStatus='Server Offline';
      return this.color='red';
    }
  }
}
