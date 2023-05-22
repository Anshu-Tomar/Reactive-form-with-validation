import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName ='';
  member:string[] = [];
  errorMessage='';
  numberofTeam : number | "" = "";
  teams:string[] [] = [];
  Addteamname(member :any){
    if(!this.newMemberName){
      this.errorMessage= "Name can't input";
    }else{
      this.errorMessage= '';
      this.member.push(this.newMemberName);
    this.newMemberName=''
   console.log(member)

    }
  }
  generatemember(){
    console.log("hey");
    if(!this.numberofTeam || this.numberofTeam <= 0)
    {
      this.errorMessage = "Invalid number"
      return
    }
    if(this.member.length < this.numberofTeam){
      this.errorMessage = "Not enough number";
      return
    }
    this.errorMessage = " ";
    const allMember = [...this.member];
  
  while(allMember.length){
    for(let i=0; i<this.numberofTeam; i++){
      const randomindex = Math.floor(Math.random()* allMember.length);
     const members = allMember.splice(randomindex,1)[0];
     if(!members)break;
     if(this.teams[i]){
      this.teams[i].push(members);
      localStorage.setItem("teams",JSON.stringify(this.teams));
     }
     else{
      this.teams[i] = [members];
     }
    
      // console.log(randomindex)
    }
  }
    console.log(this.teams);
    
    // console.log(allMember)
  }

  //input for add member
  oninput(member:string){
    this.newMemberName = member;
  }

  //input for generator
  numberofTeaminput(value:string){
    this.numberofTeam = Number(value)
  }

  //edit of member
  editmember(member:any){
    const index = this.teams.indexOf(member);
    console.log(index)
    

  }
}

