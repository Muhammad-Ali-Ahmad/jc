import { Component, OnInit } from '@angular/core';
import { JsService } from '../../service/js.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-exp-details',
  templateUrl: './exp-details.component.html',
  styleUrls: ['./exp-details.component.scss']
})
export class ExpDetailsComponent implements OnInit {

  experience: Experience[];
  message: string[];
  id: string;

  constructor( private expService: JsService, private route:ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    this.expService.getMessageById(this.id).subscribe((data: Experience[]) => {
      console.log("get message")
      if (data) {
        console.log("get message", data)        
          this.experience = data;
      }
    }, err => console.error(err));

  }

}
