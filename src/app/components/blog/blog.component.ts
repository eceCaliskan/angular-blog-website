import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from './../../Blog';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
posts!: any[];
data!: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getUsers().subscribe(data => {

      this.posts = data;
    })


  }

}
