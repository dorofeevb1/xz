import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface Project {
  text: string;
  description: string;
  id: number;
  image: string;
}
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
    { text: 'Кейс Риммерг', description: "Долгосрочная аренда", id: 1, image: '/assets/home4.jpg' },
    { text: 'Кейс Санжей', description: "Долгосрочная аренда", id: 2, image: '/assets/home4.jpg', },
    { text: 'Кейс ВЕСТA_HOUSE', description: "Долгосрочная аренда", id: 3, image: '/assets/home4.jpg' },
    { text: 'Кейс Линя ПЕРЕУЛОК', description: "Долгосрочная аренда", id: 4, image: '/assets/home4.jpg' },
    { text: 'Кейс Пятничные Огни', description: "Долгосрочная аренда", id: 5, image: '/assets/home4.jpg' },
    { text: 'Кейс Пятничные Огни', description: "Долгосрочная аренда", id: 6, image: '/assets/home4.jpg' },
    { text: 'Кейс Солнечный Утро', description: "Долгосрочная аренда", id: 7, image: '/assets/home2.jpg' }
  ];

  showDescription: { [key: number]: boolean } = {};

  constructor() {
    this.projects.forEach(project => this.showDescription[project.id] = false);
  }
  ngOnInit(): void {
  }
}
