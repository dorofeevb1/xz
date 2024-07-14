
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public home = "/";
  public portfolio = "/portfolio";
  public services = "/services";
  public about = "/about";
  public contacts = "/contacts";
  projects = [
    {
      title: 'Кейс 1',
      imageUrl: '/assets/home1.jpg'
    },
    {
      title: 'Кейс 2',
      imageUrl: '/assets/home2.jpg'
    },
    {
      title: 'Кейс 3',
      imageUrl: '/assets/home3.jpg'
    },
    {
      title: 'Кейс 4',
      imageUrl: '/assets/home4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
