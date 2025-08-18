import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { States } from '../state-list.model';
import { RegistrationappService } from '../registrationapp.service';
import { RegistrationRequestModel } from '../registration-request-model';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  public currentStep = 1;
  public firstName = '';
  public lastName = '';
  public email = '';
  public confirmEmail = '';
  public states = '';
  public subscribe = false;
  public isLoading: boolean;

  stateList = [
    new States('MH', 'Maharashtra'),
    new States('CA', 'California'),
    new States('LDN', 'London')
  ];
  registrationDetails: Registration | null = null;
  public Key = 'jdoe@sample.com';

  constructor(
    private readonly registrationappService: RegistrationappService
  ) { }

  public goNextStepper(form: NgForm): void {
    if (this.currentStep === 1) {
      if (!this.firstName || !this.lastName || !this.states) {
        Object.values(form.controls).forEach(c => c.markAsTouched());
        return;
      }
    }
    if (this.currentStep === 2) {
      if (!this.email || !this.confirmEmail || this.email !== this.confirmEmail) {
        Object.values(form.controls).forEach(c => c.markAsTouched());
        return;
      }
    }
    this.currentStep++;
  }

  public goPrev(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  public submitForm(form: NgForm): void {
    if (!form.valid || this.email !== this.confirmEmail) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    const request: RegistrationRequestModel = {
      firstName: this.firstName,
      lastName: this.lastName,
      state: this.states,
      email: this.email,
      subscribe: this.subscribe
    };
    this.registrationappService.createRegistration(request, this.email).subscribe({
      next: (response) => {
        console.log('Response', response);
        alert('Form submitted successfully!');
        form.resetForm();
        this.currentStep = 3;
      },
      error: (err) => {
        console.error('API error:', err);
        alert('Registration failed. Please check your inputs and try again.');
      }
    });
  }
}