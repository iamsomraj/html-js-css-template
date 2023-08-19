// Facade Pattern
// AudioPlayer, VideoPlayer
// MulitmediaFacade

class AudioPlayer {
  play() {
    console.log('Audio Player ' + ' started ');
  }
  stop() {
    console.log('Audio Player' + ' stopped ');
  }
}

class VideoPlayer {
  play() {
    console.log('Video Player ' + ' started ');
  }
  stop() {
    console.log('Video Player ' + ' stopped ');
  }
}

class MulitmediaFacade {
  turnOn() {
    new AudioPlayer().play();
    new VideoPlayer().play();
  }

  turnOff() {
    new AudioPlayer().stop();
    new VideoPlayer().stop();
  }
}

const multimedia = new MulitmediaFacade();
multimedia.turnOn();
multimedia.turnOff();
