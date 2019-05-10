export class Student
{
    name:string;
    rollnumber:number;
    marks:number;
    Result:boolean;
    passFail:string;
}

export class Address extends Student{
    Address1:string;
    Address2:string;
    City:string;
    State:string;
    zipcode:number;
}