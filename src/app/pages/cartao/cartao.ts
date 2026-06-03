import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX, lucideNfc, lucideBrain, lucideGraduationCap }  from '@ng-icons/lucide';
import { NgStyle, NgFor } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.html',
  styleUrl: './cartao.css',
  // imports: [NgStyle, NgFor, NgIconComponent],
  viewProviders: [provideIcons({ lucideNfc, lucideBrain, lucideGraduationCap})]

})
export class Cartao {

  isBack = false;

  flipCard() {
    this.isBack = !this.isBack;
  }
}
