import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts = {
    phone: '+7 (999) 999-99-99',
    whatsapp: 'Написать WhatsApp',
    whatsappimg: 'assets/whatsapp.png',
    telegram: 'Написать Telegram',
    telegramimg:"assets/telegramimg.png",
    socialMedia: [
      { name: 'YouTube', link: '#', icon: 'assets/youtube.png' },
      { name: 'Telegram', link: '#', icon: 'assets/telegram.png' }
    ],
    image: 'assets/_6__9919 1.png'
  };

  constructor() { }

  ngOnInit(): void {
  }
}