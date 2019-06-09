import { Component, OnInit } from '@angular/core';
import { UserRequestService } from 'src/app/user-http/user-request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // userInfo = {
  //   login: '',
  //   avatar_url: '',
  //   followers: ''
  // };
  userInfo: any;
  userRepos: any;
  userRequest: UserRequestService;

  name = 'ArnoldOduma';

  repo: any[];

  constructor(private requestUser: UserRequestService) {
    this.requestUser.userRequest(name).subscribe( userInfo => {
      console.log(userInfo);
      this.userInfo = userInfo;
    });
    // this.requestUser.userRepos().subscribe( userRepo => {
    //   console.log(userRepo);
    //   this.userInfo = userRepo;
    // });
   }

   searchRepo(name) {
    this.requestUser.userRepos(name).subscribe(userRepos => {
      console.log(userRepos);
      console.log('Searching repo....');
      this.userRepos = userRepos;
    });
   }

   searchGit(name) {
     this.requestUser.userRequest(name).subscribe(userInfo => {
       console.log(userInfo);
      //  console.log(userInfo.error);
       this.userInfo = userInfo;
     });
     this.searchRepo(name);
   }


  ngOnInit() {
    this.searchGit(this.name);
    // this.searchRepo();
  }

}
