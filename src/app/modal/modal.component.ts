import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatCheckboxModule, MatIconModule, MatFormFieldModule,  FormsModule,
    ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalComponent>) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const form = this.contactForm.value;
      const templateParams = {
        name: form.name,
        phoneNumber: form.phoneNumber,
        consent: form.consent
      };

      emailjs.send('service_wqcqrxs', 'template_ui8as2h', templateParams, 'HLwsPyM96n0_XBi5O')
        .then((response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.error('FAILED...', err);
        });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
