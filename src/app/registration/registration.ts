import { Component, OnInit } from '@angular/core';
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
export class Registration implements OnInit {

  public currentStep = 1;
  public firstName = '';
  public lastName = '';
  public email = '';
  public confirmEmail = '';
  public states = '';
  public subscribe = false;
  public isLoading: boolean;

  stateList = [
    new States('Maharashtra', 'Maharashtra'),
    new States('California', 'California'),
    new States('London', 'London')
  ];
  registrationDetails: Registration | null = null;
  public Key = 'jdoe@sample.com';
  public registrationId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

  constructor(
    private readonly registrationappService: RegistrationappService
  ) { }

  ngOnInit(): void {
    this.loadRegistrationDetails();
  }

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
    this.registrationappService.createRegistration(request, this.email).subscribe((response) => {
      console.log('Response', response);
    });
    alert('Form submitted successfully!');
    form.resetForm();
    this.currentStep = 3;
  }

  public loadRegistrationDetails(): void {
    this.isLoading = true;
    this.registrationappService.getRegistrationById(this.registrationId, this.Key).subscribe({
      next: (response) => {
        this.registrationDetails = response;
        console.log('Registration Details:', this.registrationDetails);
      },
      error: (error) => {
        console.error('Error loading registration details:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  public deleteRegistrationRecord(): void {
    this.isLoading = true;
    this.registrationappService.deleteRegistration(this.registrationId, this.Key).subscribe({
      next: (response) => {
        console.log('Registration deleted successfully:', response);
      },
      error: (error) => {
        console.error('Error deleting registration:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}