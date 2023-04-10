import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  cardInfoGroup!: FormGroup;
  submitted: boolean = false;
  formGroupValid: boolean = false;
  @ViewChild('yearInput', { static: false }) yearInput!: ElementRef;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {}

  formatCardNumber(event: any): void {
    const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = formattedValue;
  }

  updateCardInfo(): void {
    this.sharedService.changeCardInfo(this.cardInfoGroup.value);
  }

  autoFocusYear(event: any): void {
    if (event.target.value.length === 2) {
      this.yearInput.nativeElement.focus();
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.cardInfoGroup.valid && this.cardInfoGroup.value) {
      this.formGroupValid = true;
    } else {
      this.formGroupValid = false;
    }
  }

  onReset() {
    this.cardInfoGroup.reset();
    this.submitted = false;
    this.formGroupValid = false;
  }

  ngOnInit(): void {
    this.cardInfoGroup = this.fb.group({
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expirationDate: this.fb.group({
        month: ['', [Validators.required]],
        year: ['', [Validators.required]],
      }),
      cvc: ['', [Validators.required]],
    });

    this.cardInfoGroup.valueChanges.subscribe(() => {
      this.updateCardInfo();
    });
  }
}
