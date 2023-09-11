interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements Door {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

const door: Door = DoorFactory.makeDoor(120, 350);

console.log('Width: ' + door.getWidth());
console.log('Height: ' + door.getHeight());
