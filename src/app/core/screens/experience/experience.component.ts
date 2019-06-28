import { Component, OnInit } from '@angular/core';
import { JsService } from '../../service/js.service';
import { Experience } from '../../interfaces/experience'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[];
  message: string;
  id: string;

  constructor( private expService: JsService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    this.expService.getMessageById('5d0d1b27a0f20d0eadaf4ceb').subscribe((data: Experience[]) => {
      console.log("get message")
      if (data) {
        console.log("get message", data)        
          this.experience = data;
      }
    }, err => console.error(err));
  }

}
