import { Component, OnInit, signal } from '@angular/core';
import { States } from './state-list.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  currentStep = 2;
  public firstName = '';
  public lastName = '';
  public email = '';
  public confirmEmail = '';
  public States = '';
  public isMarried = false;

  stateList = [
    new States('1', 'Maharashtra'),
    new States('2', 'California'),
    new States('3', 'London')
  ];

  public next(form: NgForm): void {
    if (!form.valid || this.email !== this.confirmEmail) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    alert('Form submitted successfully!');
    form.resetForm();
  }
}