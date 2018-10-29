import { Component, OnInit } from '@angular/core';
import { FactService } from '../common/fact.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts: any;

  constructor(private service: FactService) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
      this.facts = res.all;
    });
  }
}
