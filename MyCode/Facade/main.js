import { HomeTheaterFacade, Amplifier, BrPlayer, Mp3Player, Projector, TheaterLights, Screen, PopcornPopper, Nikita } from './js/HomeTheaterFacade'
var oHomeTheaterFacade = new HomeTheaterFacade({
  amplifier: new Amplifier(),
  brPlayer: new BrPlayer(),
  mp3Player: new Mp3Player(),
  projector: new Projector(),
  theaterLights: new TheaterLights(),
  screen: new Screen(),
  popcornPopper: new PopcornPopper(),
});
oHomeTheaterFacade.watchMovie(new Nikita());
oHomeTheaterFacade.endMovie();
