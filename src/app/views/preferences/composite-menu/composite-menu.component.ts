import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-composite-menu',
  templateUrl: './composite-menu.component.html',
  styleUrls: ['./composite-menu.component.scss'],
})
export class CompositeMenuComponent {
  // //Helps with
  @Input() tabs!: { name: string }[];
  //Helps call function in the composite component
  @Output() fnEmit = new EventEmitter<string>();
  // TS object
  @Input() icons!: any;
  onFnClick() {
    this.fnEmit.emit('Hello from reusable component');
  }

  //Store user information
  @Input() firstName!: string;
  @Input() activity!: Date;
  @Input() role!: string;


  //User Management
  // myForm: FormGroup;

  // Global Icons store

  // currentRoute() {
  //   const newLocal = this.route.isActive(
  //     '/settings/machines-management',
  //     false
  //   );
  //   console.log(newLocal);
  //   return newLocal;
  // }

}
