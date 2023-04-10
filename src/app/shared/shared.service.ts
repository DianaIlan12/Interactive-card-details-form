import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private cardInfoSource = new BehaviorSubject({
    cardName: '',
    cardNumber: '',
    expirationDate: { month: '', year: '' },
    cvc: '',
  });

  currentCardInfo = this.cardInfoSource.asObservable();

  constructor() {}

  changeCardInfo(cardInfo: any): void {
    this.cardInfoSource.next(cardInfo);
  }
}
