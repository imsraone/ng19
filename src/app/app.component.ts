import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    standalone: false,
    template:`<h1>Hello KPMG Angular19 demo by {{name}}</h1> 
    {{games}}
    {{emp}}
    <ul>
        <li *ngFor="let game of games">{{game}}</li>
    </ul>
    {{emp.employeeId + " " + emp.Ename}}
    {{emp.employeeId}} {{emp.Ename}}
    {{emp | json}}
<br>
<br>
    <table border="1">
        <tr *ngFor="let ep of emps">
            <td>{{ep.eid}}</td>
            <td>{{ep.ename | uppercase}}</td>
            <td>{{ep.ename | slice:2}}</td>
            <td>{{ep.ename | slice:2:4}}</td>
            <td>{{ep.gender}}</td>
            <td>{{ep.sal | number}}</td>
            <td>{{ep.sal | currency}}</td>
            <td>{{ep.sal | currency:"INR"}}</td>
            <td>{{ep.doj | date:"dd/MM/y"}}</td>
            <td>{{ep.retired}}</td>
        </tr>
    </table>

    <nested><nested>`
})

export class AppComponent{
    name:string;
    games:string[] = ["Cricket","Football","Chess"]
    emp={"employeeId":101,"Ename":"Reddy"};
    emps=[
        {'eid':1001,'ename':'Tarun','gender':'M','sal':45000,'retired':false,'doj':new Date("2011-01-05")},
        {'eid':1002,'ename':'Priya','gender':'F','sal':77000,'retired':false,'doj':new Date("2015-02-04")},
        {'eid':1003,'ename':'Praveen','gender':'M','sal':125000,'retired':true,'doj':new Date("1985-11-11")},
        {'eid':1004,'ename':'Kavita','gender':'F','sal':85000,'retired':true,'doj':new Date("1980-05-07")},
        {'eid':1005,'ename':'Gaurav','gender':'M','sal':75000,'retired':false,'doj':new Date("2017-09-09")}
    ]
    constructor(){
        this.name = "Sravan Vanteru"
    }
}