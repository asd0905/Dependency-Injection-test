import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
        return {invalidSku: true};
    }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
    myForm: FormGroup;
    sku1: AbstractControl;
    sku2: AbstractControl;
    sku3: AbstractControl;
    productName: string;

  constructor(fb: FormBuilder) {
      this.myForm = fb.group({
          'sku1': ['', Validators.compose([
              Validators.required, skuValidator])],
          'sku2': ['', Validators.compose([
            Validators.required, skuValidator])],
          'sku3': ['', Validators.compose([
            Validators.required, skuValidator])],
          'productName': ['', Validators.compose([
              Validators.required, skuValidator])]
      });
      this.sku1 = this.myForm.controls['sku1'];
      this.sku2 = this.myForm.controls['sku2'];
      this.sku3 = this.myForm.controls['sku3'];

      this.sku1.valueChanges.subscribe(
          (value: string) => {
              console.log('sku changed to: ', value);
          }
      );

      this.myForm.valueChanges.subscribe(
          (form: any) => {
              console.log('form changed to:', form);
          }
      );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
      console.log('you submitted value: ', value);
  }

}
