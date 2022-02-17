import { Component, OnInit } from '@angular/core';
import { PostService } from './../../service/post.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
postheading !: String;
postbody !: String;
author !: String;
date =new Date().toISOString()
posts!: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }


 addClick(){
   const newTask = {

     postheading: this.postheading,
     postbody: this.postbody,
     author: this.author,
     date: this.date
   }
   console.log("ok")
this.postService.addUsers(newTask).subscribe((task)=>(this.posts.push(task)));
  /*  this.blogHeading ="";
   this.blog ="";
   this.author = "" */


 }
}
