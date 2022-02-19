import { Component, OnInit } from '@angular/core';
import { PostService } from './../../service/post.service';
import { Blog } from './../../Blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
postheading !: String;
postbody !: String;
postsummary !: String;
author !: String;
date =new Date()
posts!: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }


 addClick(){
   const newTask= {

     postheading: this.postheading,
     postsummary: this.postsummary,
     postbody: this.postbody,
     author: this.author,
     date: this.date ,

   }
   console.log("ok")
this.postService.addUsers(newTask).subscribe((task)=>(this.posts.push(task)));
  /*  this.blogHeading ="";
   this.blog ="";
   this.author = "" */


 }
}
