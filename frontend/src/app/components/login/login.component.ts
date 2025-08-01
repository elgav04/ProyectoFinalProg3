import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = {
    usuario: '',
    clave: ''
  };

  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.form);
    this.authService.login(this.form).subscribe({
      next: (res) => {

        this.router.navigate(['/home']);

      },
      error: (err) => {
        this.error = err.error || 'Error al iniciar sesión';
      }
    });
  }
}
