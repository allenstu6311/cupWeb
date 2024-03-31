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
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {
    this.http.get('/products/1').subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit() {
    // this.mailForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   lineId: [''],
    //   message: [''],
    // });
    this.mailForm = this.fb.group({
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: [Validators.required],
      }),
      lineId: new FormControl(''),
      message: new FormControl(''),
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
      // this.showBox = true;
      // setTimeout(() => {
      //   this.lightBox.nativeElement.focus();
      // }, 1000);

      emailjs
        .send('service_9y4pk49', 'template_rn4wtkf', templateParams, {
          publicKey: 'c_mRBMNUzJXD7c1m4',
        })
        .then(
          () => {
            Swal.fire({
              title: '送出成功',
              icon: 'success',
            });
          },
          (error) => {
            Swal.fire({
              title: '送出失敗',
              icon: 'error',
            });
          }
        );
    }
  }
}
