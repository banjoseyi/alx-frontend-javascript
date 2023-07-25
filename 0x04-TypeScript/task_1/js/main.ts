interface Teacher {
 firstName: string;
 lastName: string;
 fullTimeEmployee: boolean;
 yearsOfExperience?: number;
 location: string;
 [key: boolean]: any;
}

// extending the Teacher interface

interface Directors extends Teacher {
 numberOfReports: number;
}

// function that prints teachers
export const printTeacher: Teacher(firstName: string, lastName: string) => {
 `${firstName[0]}. ${lastName}`;
}

// writing a class
interface studentClassInerface {
 firstName: string;
 lastName: string;
}

class studentClass {
 firstName: string;
 lastName: string;

 constructor(firstName: string, lastName: string){
  this.firstName = firstName;
  this.lastName = lastName;
 }

 workOnHomework(): string{
  return "Currently working";
 }

 displayName(): string{
  return this.firstName;
 }
}
