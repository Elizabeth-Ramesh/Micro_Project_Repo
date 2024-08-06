import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee';
  result:string;
  employee:Employee;
  employeeArr:Employee[];
  flag:boolean;

  constructor(private service:EmployeeService){
    this.employee = new Employee();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
  }
  insertEmployee(data: any){
    this.employee.id = data.empId;
    this.employee.Name = data.empName;
    this.employee.Salary = data.empSalary;
    this.employee.Email =data.empEmail;
    this.employee.Mobile=data.empMobile;
    this.employee.Address=data.empAddress;
    //alert(data.empId+" "+data.empName+" "+data.empSalary);
    //this.service.insertEmployee(this.employee);

    this.result = this.service.insertEmployee(this.employee);
  }
  updateEmployee(data: any){
    this.employee.id=data.empId;
    this.employee.Name=data.empName;
    this.employee.Salary=data.empSalary;
    this.employee.Email =data.empEmail;
    this.employee.Mobile=data.empMobile;
    this.employee.Address=data.empAddress;
    // alert(data.empId+" "+data.empName+" "+data.empSalary);

    this.result=this.service.updateEmployee(this.employee);
  }
  deleteEmployee(data:any){
    this.result=this.service.deleteEmployee(data.empId);    
}
  findEmployee(data:any){
    this.employee=this.service.findEmployee(data.empId);
    this.result=this.employee.id+" "+this.employee.Name+" "+this.employee.Email+" "+this.employee.Mobile+" "+this.employee.Salary+" "+this.employee.Address;     
}
findAllEmployee(){
this.employeeArr=this.service.findAllEmployee();
this.flag=true;
}
  
}
