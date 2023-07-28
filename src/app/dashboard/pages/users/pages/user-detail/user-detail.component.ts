import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent {

  public user: User | null = null;
  public userId?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UserService
    ) {
   if (!Number(this.activatedRoute.snapshot.params['id'])) {
    this.router.navigate(['dashboard', 'users']);
   } else {
    this.userId = Number(this.activatedRoute.snapshot.params['id']);
    this.loadUser();
   }
  }


  loadUser(): void{
    if(this.userId){
      this.usersService.getUserById(this.userId).subscribe()
    }
  }
}
