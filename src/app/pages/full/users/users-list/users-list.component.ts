import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { userModel } from 'src/app/models/users/userModel';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users?: userModel[];
  subscription: Subscription[] = [];
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
        name: ['',Validators.required],
        username: ['',Validators.required],
        password: ['',Validators.required],
        email: ['',Validators.required, Validators.email],
        rolId: ['',Validators.required, Validators.min(1)]
      })
     }

  ngOnInit( ): void {
    let sub = this.userService.getAll().subscribe( users => this.users = users );
    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

  get controls() {
    return this.userForm.controls;
  }

  saveUser(): void {
    console.log(this.userForm.value);
    let newUser:userModel = this.userForm.value;
    /*newUser.rol_id = 1;*/
    this.userService.saveUser(newUser).subscribe(console.log)
  }

  deleteUser(userId?: number) {
    if (userId) 
      this.userService.deleteById(userId).subscribe( _ => alert("Successfull")
    )
  }


}
