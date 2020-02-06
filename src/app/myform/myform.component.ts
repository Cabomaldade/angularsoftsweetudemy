import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


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

  profileForm = this.fb.group ({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({ // aqui se usa nessa sintax para simplificar
      street: [''],
      city: [''],
      state: [''], // Simplifica com essa sintax onde Angular cria o Form para nós
    })
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  clear(){
    this.profileForm.patchValue({ // ao contrário de setValue, com patch podemos passar só parte do objeto
      address: {
        street:'',
        city:'',
        state:''
      }
    })
  }

  constructor(private fb: FormBuilder) {}
}
