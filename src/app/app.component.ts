import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
    title = 'Angular  CRUD operation with an Array Developed By kUMARGOUD';
    employees = [
      {name:"Amer", position:"Programmer"},
      {name:"Durga", position:"Designer"},
      {name:"Mani", position:"Manager"}
    ];
    model:any={};
    model2:any={};
    msg:any="";
    addEmployee(){
      this.employees.push(this.model);
      this.model = {};
      this.msg = "Record is successfully added..... "; 
  
    }
    deleteEmployee(i:any){
      this.employees.splice(i,1);
      this.msg = "Record is successfully deleted..... ";
      
    }
    myValue:any;
    editEmployee(k:any){
      this.model2.name = this.employees[k].name;
      this.model2.position = this.employees[k].position;
      this.myValue = k;
  
    }
    updateEmployee(){
      let k= this.myValue;
      for(let i=0; i<this.employees.length;i++){
        if(i==k){
          this.employees[i]= this.model2;
          this.model2 = {};
          this.msg = "Record is successfully updated..... ";
        }
      }
    }
    clickMe(){
      this.msg = "";
    }
  }

