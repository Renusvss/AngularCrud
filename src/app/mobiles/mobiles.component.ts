import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileServiceService } from '../mobile-service.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  constructor(private mobService: MobileServiceService) {}
  mobile:any;
  formHeader = 'Add Mobile';
  id = null;
  mobiledevices = null;
  ram = null;
  processor = null;
  camerapixel = null;

  showForm = false;

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mobService.getAllData().subscribe(
      (res: any) => {
        console.log(res);
        this.mobile = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteMobiledata(id: Number) {
    this.mobService.deleteAllMobiledata(id).subscribe((res: any) => {
      res = this.getData();
    });
  }
  openForm(data = null) {
    this.showForm = true;
    if (data) {
      this.id = data['id'];
      this.mobiledevices = data['mobiledevices'];
      this.processor = data['processor'];
      this.ram = data['ram'];
      this.camerapixel = data['camerapixel'];
      this.formHeader = 'Edit Mobiles';
    }else{
      this.id = null;
    this.mobiledevices = null;
    this.processor = null;
    this.ram = null;
    this.camerapixel = null;
    this.formHeader='Add Mobiles';

    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }
  clearForm() {
    this.id = null;
    this.mobiledevices = null;
    this.processor = null;
    this.ram = null;
    this.camerapixel = null;
  }
  saveForm() {
    this.showForm=false;
    let body={
      id:this.id;
      :mobiledevices:this.mobiledevices;
    }

  }
}
