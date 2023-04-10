import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  cardInfo: any;
  cardInfoSubscription!: Subscription;

  defaultCardInfo = {
    cardName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    expirationDate: { month: '00', year: '00' },
    cvc: '000',
  };
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.cardInfoSubscription = this.sharedService.currentCardInfo.subscribe(
      (cardInfo) => {
        this.cardInfo = cardInfo;
      }
    );
  }

  ngOnDestroy(): void {
    this.cardInfoSubscription.unsubscribe();
  }
}
