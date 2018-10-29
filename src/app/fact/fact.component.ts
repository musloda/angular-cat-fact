import { Component, OnInit } from '@angular/core';
import { Fact } from '../common/fact';
import { FactService } from '../common/fact.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  fact: Fact = new Fact();

  constructor(private activatedRoute: ActivatedRoute, private service: FactService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      const id = this.activatedRoute.snapshot.params.id;
      this.service.readById(id).subscribe(data => {
        this.fact = data;
      });
    });
  }

}
