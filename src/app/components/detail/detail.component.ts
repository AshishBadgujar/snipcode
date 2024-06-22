import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { Snippet } from '../../types/snippet';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  codeSnippet: Snippet = {
    title: '',
    code: ''
  }
  constructor(private dbService: DbService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const docId = this.route.snapshot.paramMap.get('id')
    this.dbService.get(docId!).then((data: any) => {
      this.codeSnippet = data
    })
  }

}
