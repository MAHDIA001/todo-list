export class  Todo {
  constructor(description) {
    this.id = tasksArray.length + 1;
    this.description = description;
    this.completed = false;
  }
  static updateIndex = () => {
    tasksArray.forEach((data, index) => {
      data.id = index + 1;
    });
  };

  static removeTask = (index) => {
    tasksArray.splice(index - 1, 1);
    this.updateIndex();
  };
}