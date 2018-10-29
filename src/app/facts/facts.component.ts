import { Component, OnInit } from '@angular/core';
import { FactService } from '../common/fact.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts: any;

  constructor(private router: Router, private service: FactService) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
      this.facts = res.all;
    });
  }

  consulter(id: string) {
    this.router.navigate(['facts', id]);
  }
}
