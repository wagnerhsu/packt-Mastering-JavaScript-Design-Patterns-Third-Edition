import { AirportControlTower, AirportLane, Airplane } from './js/Mediator'

const AirportJFKTowerControl = new AirportControlTower();

AirportJFKTowerControl.addLane(new AirportLane(1));
AirportJFKTowerControl.addLane(new AirportLane(2));

const Airplane100BJC = new Airplane('100BJC', AirportJFKTowerControl);
const Airplane365MPD = new Airplane('365MPD', AirportJFKTowerControl);

Airplane100BJC.askLanding();

Airplane365MPD.askTakeOff();
