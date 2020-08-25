import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email: Email;

  constructor() { }

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to,
        [
          Validators.required,
          Validators.email
        ]),
      from: new FormControl({ value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    })
  }

}