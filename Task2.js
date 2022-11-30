// First , Person Class
class Person {
  constructor(full_name, money, sleep_mood, healthRate) {
    this.full_name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;
    this._healthRate = healthRate; // private property
  }
  gethealth_Rate() {
    return this._healthRate;
  }
  sethealth_Rate(value) {
    this._healthRate = value;
    if (0 < value < 100) {
      return this._healthRate;
    }
  }
}
Person.prototype.sleep = function (hours) {
  if (hours == 7) {
    this.sleep_mood = "happy";
    return this.sleep;
  } else if (hours < 7) {
    this.sleep_mood = "Tired Person";
    return this.sleep_mood;
  } else {
    this.sleep_mood = "Lazy person";
    return this.sleep;
  }
};

Person.prototype.Eat = function (meals) {
  switch (meals) {
    case 3:
      this.health_Rate = "100% health rate ";
      return this.healthRate;

    case 2:
      this.health_Rate = "75% health rate";
      return this.healthRate;
    case 1:
      this.health_Rate = "50% health rate";
      return this.healthRate;
  }
};

Person.prototype.buy = function (items) {
  for (items == 1; items > 1; items++) {
    this.money =
      "Decreases money by " + items * 10 + " LE for byuing " + items + " items";
    return this.money;
  }
};

let Zienab = new Person("Zienab", 30, "tired", 2);
console.log(Zienab);
console.log(Zienab.sethealth_Rate(3));
console.log(Zienab.gethealth_Rate());

// Now we will add Employee Class to inherit from Person Class

class Employee extends Person {
  constructor(
    full_name,
    money,
    sleep_mood,
    healthRate,
    id,
    Email,
    WorkMood,
    Salary,
    IsManager
  ) {
    // initiate something new
    super(full_name, money, sleep_mood, healthRate);
    this.WorkMood = WorkMood;
    this.id = id;
    this.Email = Email;
    this.IsManager = IsManager;
    this._Salary = Salary;
  }
  getSalary() {
    return this._Salary;
  }

  setSalary(value2) {
    if (value2 >= 1000) {
      this._Salary = value2;
    } else {
      this._Salary = "not less than 1000 LE";
    }
  }
  Work(hours) {
    if (hours == 8) {
      this.WorkMood = "Happy";
      return this.WorkMode;
    } else if (hours > 8) {
      this.WorkMood = "Tired";
      return this.WorkMode;
    } else {
      this.WorkMood = "Lazy";
      return this.WorkMode;
    }
  }
}
var Adel = new Employee(
  "Adel",
  10,
  "tired",
  75,
  246,
  "sdv@gmail.com",
  "Happy",
  1000,
  "yes"
);
console.log(Adel);
console.log(Adel.Work(9));
console.log(Adel.setSalary(1000));
console.log(Adel.getSalary());

//Now Office inharites
// var employees =[];
class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    for (var i = 0; i < this.employees.length; i++) {
      let employee = this.employees[i];
      console.log(`Employee id : ${employee.id}`);
      if (employee.IsManager == false) {
        console.log(employee.getSalary());
      }
    }
  }

  hire(Employee) {
    this.employees.push(Employee);
    return this.employees;
  }

  getEmployee(empId) {
    for (var i = 0; i < this.employees.length; i++) {
      let employee = this.employees[i];
      if (employee.id == empId) {
        return employee;
      }
    }
  }
  // employee
  Fire(empId) {
    for (var i = 0; i < this.employees.length; i++) {
      let employee = this.employees[i];
      if (employee.id == empId) {
        this.employees.remove(employee);
      }
    }
  }
}

let Tarek = new Employee(
  "Tarek",
  10,
  "tired",
  null,
  246,
  null,
  "lazy",
  2000,
  false
);
// let AA = new Office("Tarek", null);
// AA.hire(Tarek);
// AA.getAllEmployees();

let input = prompt("Enter add for adding new employee");
let AA = new Office("Tarek", null);

while (input != "Q") {
  if (input == "add") {
    input = prompt("Enter who you are");
    switch (input) {
      case "manager":
        let x1 = prompt("Enter name");
        let x2 = Number(prompt("Enter age "));
        let x3 = Number(prompt("Enter id "));
        let Zara = new Employee(x1, x2 , x3);
        AA.hire(Zara);
        AA.getAllEmployees();
        break;
      case "employee":
        let X1 = prompt("Enter name");
        let X2 = Number(prompt("Enter age "));
        let Sara = new Employee(x1, x2);
        AA.hire(Sara);
        AA.getAllEmployees();
        break;
      default:
        break;
    }
  }
  break;
}
