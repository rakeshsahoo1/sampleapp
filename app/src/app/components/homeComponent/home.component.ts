/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder} from '@angular/forms';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

    sampleform;

    selectdata = [
        'smart','inteligent','hard working'
    ]

    ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

    constructor(private fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.sampleform = this.fb.group({
            name:['', [Validators.required]],
            selectvalue:[''],
            desc:[''],
            email:['', [Validators.email]],
            password1:['',[Validators.required]],
            password2:['',[Validators.required]],
            phonenumber:['',[Validators.maxLength(10)]],
            mobile:['', [Validators.minLength(5)]],
            numbervalidation:['', [Validators.pattern("^[0-9]*$")]],
            maxvalue:['', [Validators.max(15)]],
            minvalue:['', [Validators.min(5)]],
            date:[''],
            tac:[''],
        },
        {
            validator: this.ConfirmedValidator("password1", "password2")
        }
        );
    }
    
    onSubmit(){
        console.log(this.sampleform.value);
    }
}
