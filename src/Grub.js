class Grub {
  constructor () {
    this.age = 0,
    this.color = 'pink',
    this.food = 'jelly';
  }
  eat() {
    var food = this.food;
    this.food = null;
    return 'Mmmmmmmmm ' + food;
  }
}