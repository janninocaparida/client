import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { PostService } from './post.service';
import { Post_i } from './post.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private post: PostService) {}
  posts: Post_i[] = [];
  
  ngOnInit() {
    this.post.getAll().subscribe((data) => {
      this.posts = data;
    });
  }
}
