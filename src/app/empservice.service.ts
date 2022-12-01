import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  userid:any;

  employees: any = [
    {
      id: 1, name: "chaithra",address:'gg'
    },
    {
      id: 2, name: "deki",address:'uu'
    },
    {
      id: 3, name: "deki",address:'ii'
    },
    {
      id: 4, name: "deki",address:'gg'
    },
    {
      id: 5, name: "deki",address:'gg'
    },
    {
      id: 6, name: "deki",address:'gg'
    },
    {
      id: 7, name: "deki"
    }, {
      id: 8, name: "deki"
    },
    {
      id: 9, name: "deki"
    },
    {
      id: 10, name: "deki"
    },
    {
      id: 11, name: "deki"
    },
    {
      id: 12, name: "deki"
    },
    {
      id: 13, name: "deki"
    },
    {
      id: 14, name: "deki"
    },
    {
      id: 15, name: "deki"
    }
  ]
  constructor() {

   }
   getAllEmployeeList(){
    return this.employees;
   }
   deleteEmployee(id:any){
    this.employees.splice(id,1);
   }
   addEmpDetailsApi(emp:any){
    let obj=Object();
    obj.id=emp.id;
    obj.name=emp.name;
    this.employees.push(obj);
    return this.employees;
   }
  //  editEmpDetails(id:any){
  //   return this.employees;
  //  }
}
