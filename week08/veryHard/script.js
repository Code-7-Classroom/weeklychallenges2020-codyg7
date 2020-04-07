class person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Running is fun - said no one ever!");
  }

  fetchJob() {
    console.log(`${this.name} is a full stack developer`);
  }
}

class Programmer extends person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = [languages];
    this.busy = true;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy === true) {
      console.log(`${this.name} cant accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to to take on a new responsibility`);
    }
  }

  learnLanguages(languages) {
    return this.languages.push(languages);
  }

  listLanguages() {
    console.log(this.languages);
  }
}

let cody = new Programmer("cody", "developer", 21, "Java");
cody.offerNewTask();
cody.learnLanguages("react");
cody.listLanguages("Java", "Javascript", "Script", "Groovy", "Node");
console.log(cody);

let Bob = new Programmer("Bob", "Backend", 21, "Java");
Bob.offerNewTask();
Bob.learnLanguages("node");
Bob.listLanguages();
console.log(Bob);

let Jeff = new Programmer("Jeff", "Frontend", 21, "react");
Jeff.offerNewTask();
Jeff.learnLanguages("angular");
Jeff.listLanguages();
console.log(Jeff);
