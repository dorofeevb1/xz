import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  title = 'Выполненные проекты'
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

  constructor() { }

  ngOnInit(): void {
  }
}
