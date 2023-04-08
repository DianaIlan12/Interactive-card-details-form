import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  cardInfoGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cardInfoGroup = this.fb.group({
      cardName: [''],
      cardNumber: [''],
      expirationDate: this.fb.group({
        month: [''],
        year: [''],
      }),
      cvc: [''],
    });
  }
}
