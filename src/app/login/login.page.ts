import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon, IonTabs, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonIcon,
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonGrid,
    ReactiveFormsModule,
  ]
})
export class LoginPage implements OnInit {

  labelsWidth: number = 8;

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  loginForm: FormGroup;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  openAlbum(album: any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

  onLogin() {
    if (this.loginForm.valid) {
      // Lógica para hacer login
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log('Login con email:', email, 'y contraseña:', password);
    }
  }

  onRegister() {
    // Lógica para redirigir a la página de registro
    console.log('Redirigiendo a la página de registro...');
  }
}
