import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { userModel } from 'src/app/models/users/userModel';
import { AlertService } from 'src/app/services/alert/alert.service';
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
    private formBuilder: FormBuilder,
    private alertService: AlertService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      rol_id: ['', Validators.required, Validators.min(1)]
    })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

  get controls() {
    return this.userForm.controls;
  }

  getAllUsers(): void {
    let sub = this.userService.getAll().subscribe(users => this.users = users);
    this.subscription.push(sub);
  }

  saveUser(): void {
    console.log(this.userForm.value);
    let newUser: userModel = this.userForm.value;
    this.userService.saveUser(newUser).subscribe(_ => {
      this.getAllUsers();
      this.alertService.successAlert("El registro se almaceno con exito..!!")
    }
    )
  }

  deleteUser(userId?: number) {
    if (userId) {
      this.userService.deleteById(userId).subscribe(
        _ => {
        this.alertService.successAlert("Se registro se elimino con exito..!!");
      },
      error => {
        this.alertService.errorAlert("ha ocurrido un error");
      })
    }
  }


}
