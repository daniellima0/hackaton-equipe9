// news-page.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component'; // ✅ Ajout du FormsModule

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  posts: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        this.loading = false;
      },
    });
  }
}
