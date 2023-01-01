class Memento {
  restore() {
    throw new Error('This method should be overwritten');
  }
}

const privateStateSnapshot = new WeakMap();
class Snapshot extends Memento {
  constructor(originator, state) {
    super();
    this.originator = originator;
    privateStateSnapshot.set(this, state);
  }
  get state() {
    return privateStateSnapshot.get(this);
  }
  restore() {
    this.originator.state = this.state;
  }
}

class Originator {
  save() {
    throw new Error('This method should be overwritten');
  }
}

const privateStateCommand = new WeakMap();
class Command extends Originator {
  constructor(state) {
    super();
    privateStateCommand.set(this, state);
  }
  get state() {
    return privateStateCommand.get(this);
  }
  set state(state) {
    privateStateCommand.set(this, state);
  }
  save() {
    return new Snapshot(this, this.state);
  }
}

const privateHistory = new WeakMap();
class Caretaker {
  constructor() {
    privateHistory.set(this, []);
  }
  get history() {
    return privateHistory.get(this);
  }
  addToHistory(snapshot) {
    const history = this.history;
    history.push(snapshot);
    privateHistory.set(this, history);
  }
  undo() {
    const snapshot = this.history.pop();
    if (snapshot) {
      console.log(snapshot.originator.state);
      snapshot.restore();
    }
  }
}

class Line extends Command {
  constructor(startX = 0, startY = 0, endX = 0, endY = 0) {
    super({
      startX,
      startY,
      endX,
      endY,
    });
  }
  setStartPoint(x, y) {
    const state = this.state;
    state.startX = x;
    state.startY = y;
    this.state = state;
  }
  setEndPoint(x, y) {
    const state = this.state;
    state.endX = x;
    state.endY = y;
    this.state = state;
  }
}

class LineEditor extends Caretaker {
  constructor() {
    super();
    this.line = null;
  }
  onMouseDown(event) {
    this.line = new Line();
    this.line.setStartPoint(event.clientX, event.clientY);
  }
  onMouseUp(event) {
    this.line.setEndPoint(event.clientX, event.clientY);
    this.addToHistory(this.line.save());
  }
}

class Painter extends Caretaker {
  constructor(commands) {
    super();
    this.commands = commands;
  }
}

export { Painter, LineEditor };
