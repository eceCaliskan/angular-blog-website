import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../service/post.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
id:any;
data:any;
  constructor(private _Activatedroute:ActivatedRoute, private postService: PostService) { }


  ngOnInit(): void {
     this.id=this._Activatedroute.snapshot.paramMap.get("post");
       this.postService.getPost(this.id).subscribe(data => {
    this.data = data as string[];
        console.log(data)
    })
  }

}
