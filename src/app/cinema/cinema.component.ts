import { Component } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {

  searchText = "";
  cinemaData: Observable<any>;

  constructor(private cinemaService: CinemaService) {


    this.cinemaData = this.cinemaService.getData();
    //this.cinemaData$ = this.cinemaService.getData1();
  }

}
