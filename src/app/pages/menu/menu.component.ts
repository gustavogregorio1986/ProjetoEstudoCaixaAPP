import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';         // para NgIf, NgFor
import { MatMenuModule } from '@angular/material/menu'; // menu
import { MatButtonModule } from '@angular/material/button'; // botão do menu
import { MatIconModule } from '@angular/material/icon'; // se quiser usar ícones
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterOutlet, CommonModule,MatMenuModule,MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
