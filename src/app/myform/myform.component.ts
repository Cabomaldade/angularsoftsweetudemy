import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {

  /*name = new FormControl('Default value');

  update (){
    this.name.setValue('A new value here');
  }*/

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  clear(){
    this.profileForm.patchValue({ // ao contrário de setValue, com patch podemos passar só parte do objeto
      address: {
        street:'',
        cicty:'',
        state:''
      }
    })
  }
}
