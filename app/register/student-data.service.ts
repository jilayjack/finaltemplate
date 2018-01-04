import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from './student-model';
@Injectable()
export class StudentDataService {

url:string="http://localhost:3000/student/";
url1:string="http://localhost:3000/delallstudent/";

content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

getAllStudents(){
  return this.http.get<Student>(this.url);
}
deleteStudent(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
delteAllCourse(stu:Student[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
addStudent(stu:Student){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updateStudent(stu:Student){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+stu.stu_id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

}
