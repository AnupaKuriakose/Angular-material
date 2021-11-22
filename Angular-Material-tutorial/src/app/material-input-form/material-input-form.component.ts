import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-material-input-form',
  templateUrl: './material-input-form.component.html',
  styleUrls: ['./material-input-form.component.css'],
})

export class MaterialInputFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitStatus: boolean = false;
  currentSelectedRole!: string;
  countries!: Array<object>;
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: [, { validators: [Validators.required], updateOn: 'change' }],
      email: [
        ,
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'change',
        },
      ],
      password: [, { validators: [Validators.required], updateOn: 'change' }],
      phone: [, { updateOn: 'change' }],
      address: [, { validators: [Validators.required], updateOn: 'change' }],
      dob: [, { updateOn: 'change' }],
      role: [
        'employee',
        { validators: [Validators.required], updateOn: 'change' },
      ],
    });
    this.setPhoneValidation();
  }

  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');
    phoneControl
      ? phoneControl.setValidators([
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ])
      : null;

    this.registerForm.get('role')!.valueChanges.subscribe((role) => {
      this.currentSelectedRole = role;
      if (role == 'jobSeeker') {
        phoneControl!.setValidators([
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]);
      } else if (role == 'employee') {
        phoneControl!.setValidators([Validators.pattern('^[0-9]*$')]);
      }
      phoneControl!.updateValueAndValidity();
    });
  }
  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
  }
  showFood(event: any) {
    console.log(event.value);
  }
}
