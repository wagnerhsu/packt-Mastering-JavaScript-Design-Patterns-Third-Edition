const Playable = (Sup) =>
  class extends Sup {
    eject() {
      throw new Error('This method should be overwritten!');
    }

    play() {
      throw new Error('This method should be overwritten!');
    }

    stop() {
      throw new Error('This method should be overwritten!');
    }
  };

const Switchable = (Sup) =>
  class extends Sup {
    on() {
      throw new Error('This method should be overwritten!');
    }

    off() {
      throw new Error('This method should be overwritten!');
    }
  };

const DummyConstructor = Object.constructor;

class Amplifier extends Switchable(DummyConstructor) {
  constructor() {
    super();
    this.volume = 0;
    this.brPlayer = null;
    this.mp3Player = null;
    this.tuner = null;
    this.surroundSound = false;
    this.stereoSound = false;
  }

  on() {
    console.log('Amplifier is on!');
  }

  off() {
    console.log('Amplifier is off!');
  }

  setVolume(volume) {
    this.volume = volume;
    console.log('Volume change to ' + volume);
  }

  setBrPlayer(brPlayer) {
    this.brPlayer = brPlayer;
    console.log('Plugged BlueRay Player to Amplifier!');
  }

  setMP3Player(mp3Player) {
    this.mp3Player = mp3Player;
    console.log('Plugged MP3 Player to Amplifier!');
  }

  setTuner(tuner) {
    this.tuner = tuner;
    console.log('Plugged on Tuner to Amplifier!');
  }

  setSurroundSound() {
    this.surroundSound = true;
    console.log('Surround Mode is active!');
  }

  setStereoSound() {
    this.stereoSound = true;
    console.log('Stereo Mode is active!');
  }
}

class Mp3Player extends Switchable(Playable(DummyConstructor)) {
  on() {
    console.log('Mp3Player is on!');
  }

  off() {
    console.log('Mp3Player is off!');
  }

  play(playlist) {
    console.log('Playing ' + playlist.sName);
  }

  stop() {
    console.log('Stop MP3Player!');
  }
}

class BrPlayer extends Switchable(Playable(DummyConstructor)) {
  on() {
    console.log('BRPlayer is on!');
  }

  off() {
    console.log('BRPlayer is off!');
  }

  eject() {
    console.log('Eject BR!');
  }

  play(movie) {
    console.log('Playing ' + movie.name);
  }

  stop() {
    console.log('Stop BRPlayer!');
  }
}

class PopcornPopper extends Switchable(DummyConstructor) {
  on() {
    console.log('PopcornPopper is on!');
  }

  off() {
    console.log('PopcornPopper is off!');
  }

  pop() {
    console.log('Yum!Yum!');
  }
}

class Projector extends Switchable(DummyConstructor) {
  constructor() {
    super();
    this.wideScreenMode = false;
  }

  on() {
    console.log('Projector is on!');
  }

  off() {
    console.log('Projector is off!');
  }

  setWideScreenMode() {
    this.wideScreenMode = true;
    console.log('Projector now is on wide screen mode!');
  }
}

class Screen {
  down() {
    console.log('The screen is down!');
  }

  up() {
    console.log('The screen is up!');
  }
}

class TheaterLights extends Switchable(DummyConstructor) {
  on() {
    console.log('The lights are on!');
  }

  off() {
    console.log('The lights are off!');
  }
}

class Tuner extends Switchable(DummyConstructor) {
  constructor() {
    this.amplifier = null;
    this.frequency = 0;
  }

  on() {
    console.log('Tuner is on!');
  }

  off() {
    console.log('Tuner is off!');
  }

  setAm() {
    console.log('Tuner AM!');
  }

  setFm() {
    console.log('Tuner FM!');
  }

  setFrequency(frequency) {
    this.frequency = frequency;
    console.log('Tuner frequency changed to ' + frequency);
  }
}

class Movie {
  constructor(name = '', minutes = 0, director = '', actors = [], description = '') {
    this.name = name;
    this.minutes = minutes;
    this.director = director;
    this.actors = actors;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  setMinutes(minutes) {
    this.minutes = minutes;
  }

  setDirector(director) {
    this.director = director;
  }

  setActors(actors) {
    this.actors = actors;
  }

  setDescription(description) {
    this.description = description;
  }
}

class Nikita extends Movie {
  constructor() {
    super('Nikita, hard to kill!', 120, 'Steven Spielberg', ['Brad Pitt'], 'Bloody!');
  }
}

class HomeTheaterFacade {
  constructor({
    amplifier = null,
    tuner = null,
    brPlayer = null,
    mp3Player = null,
    projector = null,
    theaterLights = null,
    screen = null,
    popcornPopper = null,
  }) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.brPlayer = brPlayer;
    this.mp3Player = mp3Player;
    this.projector = projector;
    this.theaterLights = theaterLights;
    this.screen = screen;
    this.popcornPopper = popcornPopper;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');

    this.popcornPopper.on();
    this.popcornPopper.pop();

    this.theaterLights.off();

    this.screen.down();

    this.projector.on();
    this.projector.setWideScreenMode();

    this.amplifier.on();
    this.amplifier.setBrPlayer(this.dvdPlayer);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);

    this.brPlayer.on();
    this.brPlayer.play(movie);
  }

  endMovie() {
    console.log('Shutting movie theater down...');
    this.popcornPopper.off();

    this.theaterLights.on();

    this.screen.up();

    this.projector.off();

    this.amplifier.off();

    this.brPlayer.stop();
    this.brPlayer.eject();
    this.brPlayer.off();
  }

  listenToMP3(playlist) {
    console.log('Start listening your music...');

    this.amplifier.on();
    this.amplifier.setCdPlayer(this.cdPlayer);
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(5);

    this.mp3Player.on();
    this.mp3Player.play(playlist);
  }

  endMP3() {
    console.log('End listening your music or the playlist has finished!');

    this.amplifier.off();

    this.mp3Player.stop();
    this.mp3Player.off();
  }

  listenToRadio() {
    console.log('Start listening your favorite radio station...');

    this.amplifier.on();
    this.amplifier.setTuner(this.tuner);
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(5);

    this.tuner.on();
    this.tuner.setFm();
    this.tuner.setFrequency(90.9);
  }

  endRadio() {
    console.log('End listening your favorite radio station...');

    this.amplifier.off();

    this.tuner.off();
  }
}

export { HomeTheaterFacade, Amplifier, BrPlayer, Mp3Player, Projector, TheaterLights, Screen, PopcornPopper, Nikita };
