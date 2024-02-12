import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent {
  mailForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.mailForm = this.fb.group({
      name: [''],
      email: [''],
      lineId: [''],
      message: [''],
    });
  }

  sendEmail() {
    const templateParams = {
      name: this.mailForm.value.name,
      email: this.mailForm.value.email,
      lineId: this.mailForm.value.lineId,
      message: this.mailForm.value.message
    };

    emailjs
      .send('service_9y4pk49', 'template_rn4wtkf', templateParams , {
        publicKey: 'c_mRBMNUzJXD7c1m4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
