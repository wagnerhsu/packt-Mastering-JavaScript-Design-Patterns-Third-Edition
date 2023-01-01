class Command {
  execute() {
    throw new Error('This method must be overwritten!');
  }
}

class Light {
  constructor() {
    this._on = false;
  }

  on() {
    this._on = true;
    console.log('Light is on');
  }

  off() {
    this._on = false;
    console.log('Light is off');
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class SimpleRemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  buttonWasPressed() {
    this.command.execute();
  }
}
export { SimpleRemoteControl, Light, LightOnCommand };
