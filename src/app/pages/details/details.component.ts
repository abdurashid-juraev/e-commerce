import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from './../../interface/interfaces';
import { ActivatedRoute, Router, RouterLink, UrlSegment } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CardService } from './../../service/card.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public card?: ProductCard;
  public cards: ProductCard[] = [];

  private cardService = inject(CardService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.fetchDataById(param['id'])
    })
  }

  public fetchDataById(id: number): void {
    this.cardService.getCardId(id).subscribe((data) => (this.card = data));
  }


  //ngOnInit(): void {
  //  this.activatedRoute.params.subscribe(param => {
  //    this.fetchDataById(param['id'])
  //  })
  //}

  //public fetchDataById(id: number): void {
  //  this.cardService.getCardId(id).subscribe((data) => (this.card = data));
  //}

  //next(card: any) {
  //  const nextId = Number(card.id) + 1;

  //  if(nextId > 12) return;

  //  this.router.navigate(['/card-detail', nextId])
  //}

  //prev(card: any) {
  //  // code here
  //  // get id and - 1 then navigate to prev product

  //  const prevId = Number(card.id) - 1;

  //  if(prevId < 1) return;

  //  this.router.navigate(['/card-detail', prevId]);
  //}
    //example.com/products?search=phone


}
