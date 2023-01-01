class Mediator {
  notify(component, eventName) {
    throw new Error('This method should be overwritten');
  }
}

class AirportControlTower extends Mediator {
  constructor(lanes = [], flights = {}) {
    super();
    this.lanes = lanes;
    this.flights = flights;
  }

  addLane(lane) {
    lane.mediator = this;
    this.lanes.push(lane);
  }

  getFreeLane() {
    let freeLane;
    this.lanes.some((lane) => {
      var isFree = lane.occupied === false;
      if (isFree) {
        freeLane = lane;
      }
    });
    return freeLane;
  }

  notify(component, eventName) {
    if (eventName === 'laneIsOccupied') {
      console.log('Lane ' + component.number + ' is occupied by ' + component.airplane.id + '.');
      component.airplane[component.airplane.pendingRequest]();
      component.setFree();
    } else if (eventName === 'laneIsFree') {
      console.log('Lane ' + component.number + ' is free.');
    } else if (eventName === 'askLanding' || eventName === 'askTakeOff') {
      if (!this.flights[component.id]) {
        this.flights[component.id] = component;
      }
      let freeLane = this.getFreeLane();
      if (freeLane) {
        freeLane.setOccupied(component);
      } else {
        setTimeout(() => {
          this.notify(component, eventName);
        }, 500);
      }
    } else if (eventName === 'land') {
      console.log('Airplane ' + component.id + ' just landed');
    } else if (eventName === 'takeOff') {
      console.log('Airplane ' + component.id + ' just took off');
    }
  }
}

class AirportLane {
  constructor(number) {
    this.number = number;
    this.mediator = null;
    this.occupied = false;
    this.airplane = null;
  }

  addMediator(mediator) {
    this.mediator = mediator;
  }

  setOccupied(airplane) {
    this.airplane = airplane;
    this.occupied = true;
    this.mediator.notify(this, 'laneIsOccupied');
  }

  setFree() {
    this.airplane = null;
    this.occupied = false;
    this.mediator.notify(this, 'laneIsFree');
  }
}

class Airplane {
  constructor(id, airportControlTower) {
    this.id = id;
    this.airportControlTower = airportControlTower;
    this.pendingRequest = '';
  }

  askLanding() {
    this.pendingRequest = 'land';
    this.airportControlTower.notify(this, 'askLanding');
  }

  askTakeOff() {
    this.pendingRequest = 'takeOff';
    this.airportControlTower.notify(this, 'askTakeOff');
  }

  wait(eventName) {
    setTimeout(() => {
      this[eventName]();
    }, 500);
  }

  land() {
    this.airportControlTower.notify(this, 'land');
  }

  takeOff() {
    this.airportControlTower.notify(this, 'takeOff');
  }
}

export { AirportControlTower, AirportLane, Airplane };
