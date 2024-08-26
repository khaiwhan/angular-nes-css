import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass',
  providers: [AppService]
})
export class DetailComponent {

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(null, Validators.required),
    description: new FormControl(),
    active: new FormControl(true),
    created_by: new FormControl(),
    created_date: new FormControl(),
    created_program: new FormControl(),
    updated_by: new FormControl(),
    updated_date: new FormControl(),
    updated_program: new FormControl()
  })
  updatemode: boolean = false

  constructor(private ar: ActivatedRoute, private sv: AppService, private rt: Router) {
    this.ar.data.subscribe(({ detail }) => {
      this.form.patchValue(detail["item"])

      if (detail["item"]["code"]) {
        this.updatemode = true
        this.form.controls["code"].disable()
      }
    })
  }

  save(): void {
    if (!this.form.invalid) {
      const item: Item = this.form.getRawValue()
      item["updated_date"] = new Date()

      if (this.updatemode) {
        this.sv.update(item).subscribe((item: Item) => {
          this.rt.navigateByUrl("")
        })
      }
      else {
        item["created_date"] = new Date()
        this.sv.add(item).subscribe((item: Item) => {
          this.rt.navigateByUrl("")
        })
      }
    }
  }
}
