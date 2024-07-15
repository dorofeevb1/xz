import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatFormFieldModule,  FormsModule,
    ReactiveFormsModule,],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  showContacts: boolean = true;
  contactForm: FormGroup;
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

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      category: ['', Validators.required],
      file: [null, Validators.required] 
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.contactForm.patchValue({
        file: file
      });
      this.contactForm.get('file')?.updateValueAndValidity();
    }
  }
  ngOnInit(): void {
  }
  toggleContacts() {
    this.showContacts = !this.showContacts;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const form = this.contactForm.value;
      const templateParams = {
        name: form.name,
        phoneNumber: form.phoneNumber,
        address: form.address,
        category: form.category,
        file: form.file
      };

      emailjs.send('service_wqcqrxs', 'template_ui8as2h', templateParams, 'HLwsPyM96n0_XBi5O')
      .then((response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        }, (err) => {
          console.error('FAILED...', err);
          alert('Failed to send email.');
        });
      }
      
    }

   
}
