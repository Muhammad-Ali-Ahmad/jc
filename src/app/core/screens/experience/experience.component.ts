import { Component, OnInit } from '@angular/core';
import { JsService } from '../../service/js.service';
import { Experience } from '../../interfaces/experience'
import {ActivatedRoute, Router} from '@angular/router';
import { flatMap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[];
  message: string[];
  id: string;
  toggle = false;

  constructor( private expService: JsService, private route:ActivatedRoute, private router: Router) { }

  addNewExp() {
    this.toggle = true;
  }

  submitNewExp(formData) {
    let experience: Experience = {
      message: formData.message
    }
    this.expService.addExperience(experience).pipe(
      flatMap(() => {
        this.toggle = false
        return this.expService.getMessage('')
      }),
      catchError(err => {
        console.error(err)
        throw err
      })
    ).subscribe((data: Experience[]) => {
      if(data) {
        this.experience = data;
      }
    });
  }

  ngOnInit() {
    this.expService.getMessage('').subscribe((data: Experience[]) => {
      console.log('get message');
      if (data) {
        console.log('get message', data)
        this.experience = data;
      }
    })

  }

}
