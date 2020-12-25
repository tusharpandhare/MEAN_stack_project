import { Component, OnInit } from '@angular/core';
// import {AppRoutingModule} from '../../app-routing.module';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-getcategory',
  templateUrl: './getcategory.component.html',
  styleUrls: ['./getcategory.component.css']
})
export class GetcategoryComponent implements OnInit {
  category;
  language;
  constructor(private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      params => {
        this.category =  params['category'];
        // this.language=params['language'];
      }
    )
  }

}

