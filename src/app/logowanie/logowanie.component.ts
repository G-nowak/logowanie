import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
    'username': '',
    'password': '',
    'msg': {
      'text': '',
      'status': ''
    }
  }
  onSubmit(){
    console.log(this.formData);
    if(this.formData.username === 'admin' && this.formData.password === "admin"){
      this.formData.msg = {
        'text': 'Zalogowano pomyślnie',
        'status': 'success'
      }
    } else {
      this.formData.msg = {
        'text': 'Błąd logowania.',
        'status': 'error'
      }
    }
  }
}
