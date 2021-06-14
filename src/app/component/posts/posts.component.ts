import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {PostService} from '../../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postsService: PostService,
    private router: Router
  ) {
    // this.posts = postsService.readPosts();

    postsService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
  }

  public onGoToThisPost(id: number): void {
    this.router.navigate(['/', 'posts', id]);
  }
}

// 1. model
// 2. component
// 3. routing
// 4. navbar
// 5. service
// 6. http
// 7. DI
// 8. html

