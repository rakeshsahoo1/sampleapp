/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder, Validators} from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-page2',
    templateUrl: './page2.template.html'
})

export class page2Component extends NBaseComponent implements OnInit {

    sampleform;

    PeriodicElement = [
  {
    position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }
  ,
  {
    position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' }
  ,
  {
    position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
  ,
  {
    position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
  ,
  {
    position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
  ,
  {
    position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
  ,
  {
    position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
  ,
  {
    position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' }
  ,
  {
    position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' }
    ];

    constructor(private fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.sampleform = this.fb.group({
            name:['', [Validators.required]],
        });
    }

    onSubmit(){
        console.log(this.sampleform.value);
    }

    selectedrow(row){
        console.log(row);
    }
}
