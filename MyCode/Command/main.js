import { SimpleRemoteControl, Light, LightOnCommand } from './js/Command'

let oSimpleRemote = new SimpleRemoteControl();
let oLight = new Light();
let oLightCommand = new LightOnCommand(oLight);

oSimpleRemote.setCommand(oLightCommand);
oSimpleRemote.buttonWasPressed();
