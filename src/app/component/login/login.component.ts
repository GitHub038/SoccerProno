import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private auth = inject(AuthService);

  ngOnInit(): void {
    this.auth.logout();
  }

  login() {
    if (this.email === '' || this.password === '') {
      alert('Please fill in all fields');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
} 
