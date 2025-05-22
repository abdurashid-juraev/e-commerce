import { CommonModule, CurrencyPipe, DatePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { TextColorDirective } from '../../shared/directive/highlight.directive';
import {  } from "../../component/components/cards/card/card.component";
import { CardAboutComponent } from "./card/card/card.component";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CurrencyPipe,
    //UpperCasePipe,
    DatePipe,
    SlicePipe,
    TruncatePipe,
    PercentPipe,
    CommonModule,
    TextColorDirective,
    CardAboutComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public h1 = 'Title sarlavha!'
  public digit:number = 0;
  public title: string = ' pipe qanday ishlaydi?';
  public price: number = 1111111;
  public realTime: Date = new Date();
  public lorem: string =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni natus dolorem magnam quidem repellat quibusdam? Pariatur suscipit quis et veniam omnis? Quaerat, eius doloremque ullam eaque possimus exercitationem tempore? Modi!';


    counter():number{
      return this.digit++;
    }

    newCounter = model(0)
    increment(){
      this.newCounter.update(n  => n + 1)
    }
}
