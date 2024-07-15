import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent {
  projects = [
    { text: 'Кейс Риммерг', image: '/assets/home4.jpg' },
    { text: 'Кейс Санжей', image: '/assets/home4.jpg' },
    { text: 'Кейс ВЕСТA_HOUSE', image: '/assets/home4.jpg' },
    { text: 'Кейс Линя ПЕРЕУЛОК', image: '/assets/home4.jpg' },
    { text: 'Кейс Пятничные Огни', image: '/assets/home4.jpg' },
    { text: 'Кейс Пятничные Огни', image: '/assets/home4.jpg' },
    { text: 'Кейс Солнечный Утро', image: '/assets/home2.jpg' }
    // Добавьте больше проектов при необходимости
  ];

}
