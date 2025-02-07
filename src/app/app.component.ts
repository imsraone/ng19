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
            <td>{{ep.gender | gender}}</td>
            <td>{{ep.sal | currency}}</td>
            <td>{{ep.sal | tax | currency:"INR"}}</td>
            <td>{{ep.doj | date:"dd/MM/y"}}</td>
            <td>
                <img *ngIf="ep.retired" src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-931.gif" height="100" width="100"/>
                <img *ngIf="!ep.retired" src="https://media1.tenor.com/images/8f2b95f4a81cbcc482f2fd81b42baa10/tenor.gif?itemid=17302700" height="100" width="100"/>
            </td>
            <td> 
                <div *ngIf="ep.retired; then thenBlock else elseBlock"></div>
                <ng-template #thenBlock><img src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-931.gif" height="100" width="100"/></ng-template>
                <ng-template #elseBlock><img src="https://media1.tenor.com/images/8f2b95f4a81cbcc482f2fd81b42baa10/tenor.gif?itemid=17302700" height="100" width="100"/></ng-template>            
            </td>
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