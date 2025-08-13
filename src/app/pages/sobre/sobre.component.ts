import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule, MatCardModule, MatButtonModule,MatIconModule, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  showMore = false; // controla se mostra o conteúdo extra

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
