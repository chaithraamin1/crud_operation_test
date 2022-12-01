import { Component, Input } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EmpserviceService } from './empservice.service';
import { FormBuilder } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: any;
  @Input() appSort: any;
  p:any=1;
  dropdownList:any;
  term:any;
  empForm:any = this.fb.group({
    id:[''],
    name: [''],
    selected:['']
  })
  dropdownSettings: any={};
  selectedItems:any = [];

  constructor(public service: EmpserviceService,private fb: FormBuilder){}
  ngOnInit() {
    this.getEmpList();

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    var $sortable = $('.sortable');
  

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   

$sortable.on('click', function(){
   debugger
  var $this = $(this);
  var asc = $this.hasClass('asc');
  var desc = $this.hasClass('desc');
  $sortable.removeClass('asc').removeClass('desc');
  if (desc || (!asc && !desc)) {
    $this.addClass('asc');
  } else {
    $this.addClass('desc');
  }
  
});
  }
 getEmpList(){
    this.employees=this.service.getAllEmployeeList();
    
    
  }
  deleteEmpRecord(id:any){
    this.service.deleteEmployee(id);
  }
 addEmpDetails(){
  let add= this.service.addEmpDetailsApi(this.empForm.value);
  console.log(add);


 }
 EditEmpRecord(id:any){
    // this.service.editEmpDetails(id)
    debugger
    let emp=this.dropdownList.find((emp: { id: any; })=>emp.id==id);
   // this.empForm["name"].setValue(id1.name);

    this.empForm.patchValue({
      id:emp.id,
      name: emp.name
 })
 for (var i = 0; i < this.dropdownList.length; i++) {
  if (this.dropdownList[i].id == emp.id)
    this.empForm.controls['selected'].setValue(this.dropdownList[i].address)
}

}
onItemSelect(item: any) {
  debugger
  // console.log(item);
  console.log(this.selectedItems)

}
onSelectAll(items: any) {
  console.log(this.selectedItems)
  
}
onItemDeSelect(item:any){
  console.log(this.selectedItems)
}
}
