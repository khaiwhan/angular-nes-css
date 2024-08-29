import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
  providers: [AppService]
})
export class ListComponent {
  items: Item[] = []

  constructor(private sv: AppService) {
    this.sv.get().subscribe((res: Item[]) => this.items = res)
  }

  delete(id: string): void {
    this.sv.delete(id).subscribe((res: Item) => {
      this.items = this.items.filter((item: Item) => item.id != id)
    })
  }
}
