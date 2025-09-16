namespace Subjects {
/// <reference path="./Teacher.ts" />

 export class Subject {
  teacher!: Teacher;

  setTeacher(teacher:Teacher) {
    this.teacher = teacher;
  }
 }
}