import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dbService: DbService) { }
  items: { id: string, title: string }[] = []
  ngOnInit() {
    this.dbService.getAll().then((data: any) => {
      this.items = data
    })
    console.log(this.items)
  }
}
