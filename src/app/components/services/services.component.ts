import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services = [
    { title: 'Консультация эксперта', description: 'Получите профессиональную консультацию эксперта', price: '10 000 руб.', image: 'assets/service1.jpg' },
    { title: 'Базовый онлайн проект', description: 'Создание базового онлайн проекта интерьера', price: 'от 500 руб./м2', image: 'assets/service2.jpg' },
    { title: 'Реализация под ключ', description: 'Полная реализация вашего проекта от идеи до исполнения', price: 'от 1 500 руб./м2', image: 'assets/service3.jpg' },
    { title: 'Коммерческий фотосет', description: 'Профессиональная фотосъемка вашего интерьера', price: 'от 15 000 руб.', image: 'assets/service4.jpg' }
  ];

  faqs = [
    { question: 'Сколько стоит хоумстейджинг?', answer: 'Цена зависит от размера и состояния объекта. Базовая консультация стоит 10 000 руб.' },
    { question: 'Сколько мне нужно вложить в мою квартиру для успешной реализации?', answer: 'Это зависит от состояния вашей квартиры и ваших целей. Мы предлагаем индивидуальные решения.' },
    { question: 'Как формируется цена и от чего она зависит?', answer: 'Цена зависит от многих факторов, таких как площадь, состояние и задачи проекта.' },
    { question: 'Можно ли сделать стейджинг самостоятельно?', answer: 'Конечно, но профессиональный подход гарантирует лучший результат.' },
    { question: 'Я нахожусь в другой стране/городе. Как мне подготовить квартиру?', answer: 'Мы предлагаем онлайн-консультации и проекты, которые помогут вам на расстоянии.' },
    { question: 'Я не планирую выводить свою квартиру на продажу или аренду. Могу ли я заказать услуги хоумстейджинга для жизни?', answer: 'Да, многие из наших клиентов используют наши услуги для улучшения собственного проживания.' }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
    // width:"100%",
 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  ngAfterViewInit(): void {
    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(this: HTMLElement) {
        this.classList.toggle("active");
        const panel = this.nextElementSibling as HTMLElement;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }
}