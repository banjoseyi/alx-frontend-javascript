//using advanced types
interface DirectorInterface {
 workFromHome(): string;
 getCoffeeBreak(): string;
 workDirectorTasks(): string;
}

//create teacher interface
interface TeacherInterface {
 workFromHome(): string;
 getCoffeeBreak(): string;
 workDirectorTasks(): string;
}

class Director implements DirectorInterface {
 workFromHome(): string {
  return "Working from home";
 }

 getCoffeeBreak(): string {
  return "Getting a coffee break";
 }

 workDirectorTasks(): string {
  return "Getting to director tasks";
 }
}

class Teacher implements TeacherInterface {
 workFromHome(): string {
  return "Cannot work from home";
 }

 getCoffeeBreak(): string {
  return "Cannot have a break";
 }
 
 workDirectorTasks(): string {
  return "Getting to work";
 }
}

//create a function
function createEmployee(salary: number | string) {
 if(salary === 'number' && salary < 500) {
  const newTeacher = new Teacher;
  return newTeacher;
 } else {
    const newDirector = new Director;
    return newDirector;
 }
}

// creating functions specific to employees
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
 return (employee instanceof Director);
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// using string literal types
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return "Teaching Math";
  }
  if (todayClass === 'History') {
    return "Teaching History";
  }
}

