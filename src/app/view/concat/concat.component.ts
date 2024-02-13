import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent {
  @ViewChild('lightBox', { static: false }) lightBox!: ElementRef;
  @ViewChild('lightboxDesc', { static: false }) lightboxDesc!: ElementRef;
  mailForm: FormGroup | any;
  sendStatus: boolean = false;
  showBox: boolean = false;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.mailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lineId: [''],
      message: [''],
    });
  }

  sendEmail() {
    if (this.mailForm.invalid) {
    } else {
      const templateParams = {
        name: this.mailForm.value.name,
        email: this.mailForm.value.email,
        lineId: this.mailForm.value.lineId,
        message: this.mailForm.value.message,
      };
      this.showBox = true;
      setTimeout(() => {
        console.log(this.lightBox);
        this.lightBox.nativeElement.focus();
      }, 1000);
   

      // emailjs
      //   .send('service_9y4pk49', 'template_rn4wtkf', templateParams , {
      //     publicKey: 'c_mRBMNUzJXD7c1m4',
      //   })
      //   .then(
      //     () => {
      //       console.log('SUCCESS!');
      //       this.sendStatus = true
      //       this.showBox = true
      //         setTimeout(() => {
      //         // Wait for the next cycle so the DOM is updated
      //         this.lightBox.nativeElement.focus();
      //       }, 0);
      //     },
      //     (error) => {
      //       this.sendStatus = false
      //       this.showBox = true
      //       // this.lightBox.nativeElement.focus()
      //       setTimeout(() => {
      //         // Wait for the next cycle so the DOM is updated
      //         this.lightBox.nativeElement.focus();
      //       }, 0);
      //       console.log('FAILED...', (error as EmailJSResponseStatus).text);
      //     }
      //   );
    }
  }
}
