import { Injectable, inject } from '@angular/core'
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth)
  private router: Router = inject(Router)

  // login method
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        localStorage.setItem('token', 'true')
        this.router.navigate(['/dashboard'])
      },
      (err) => {
        alert(err.message)
        this.router.navigate(['/login'])
      }
    )
  }

  // register method
  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      () => {
        alert('Registration successful')
        this.router.navigate(['/login'])
      },
      (err) => {
        alert(err.message)
        this.router.navigate(['/register'])
      }
    )
  }

  // logout method
  logout() {
    signOut(this.auth).then(
      () => {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
      },
      (err) => {
        alert(err.message)
      }
    )
  }
}
