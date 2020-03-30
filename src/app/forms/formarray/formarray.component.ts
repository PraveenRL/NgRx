import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  public skillsForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: new FormControl(''),
      skills: this.fb.array([])
    })
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: new FormControl(''),
      exp: new FormControl('')
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }

  //-----------------------------------------

  //Method 1
  onClickFormArrayMethod1() {
    const formArray = new FormArray([
      new FormControl('John', Validators.required),
      new FormGroup({
        country: new FormControl('', Validators.required),
      }),
      new FormArray([])
    ])

    for (let control of formArray.controls) {
      if (control instanceof FormControl) {      //instanceof -> to check FormControl,FormGroup,FormArray
        console.log('FormControl');
      }
      if (control instanceof FormGroup) {
        console.log('FormGroup');
      }
      if (control instanceof FormArray) {
        console.log('FormArray');
      }
    }
  }

  // Method 2,
  onClickFormArrayMethod2() {
    const formArray = this.fb.array([
      new FormControl('John', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('d', Validators.required),
    ])

    formArray.push(new FormControl('Push Method'))
    console.log(formArray.value);
    console.log(formArray.at(3).value);     //at -> index

    const formGroup = this.fb.group([
      new FormControl('John', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('d', Validators.required),
    ])
    console.log(formGroup.value);
    /*
      FormArray -> gives an array
      FormGroup -> gives an object
    */

  }

}
