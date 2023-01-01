class State {
  download() {
    throw new Error('This method must be overwritten!');
  }
  pause() {
    throw new Error('This method must be overwritten!');
  }
  fail() {
    throw new Error('This method must be overwritten!');
  }
  finish() {
    throw new Error('This method must be overwritten!');
  }
}

const privateDownload = new WeakMap();

class ReadyState extends State {
  constructor(download) {
    super();
    privateDownload.set(this, download);
  }
  get _download() {
    return privateDownload.get(this);
  }
  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log('Start Download!');
  }
  pause() {
    throw new Error('You cannot pause a download when it has not started yet!');
  }
  fail() {
    throw new Error('A download cannot fail if it has not started!');
  }
  finish() {
    throw new Error('A download cannot finish if it has not started!');
  }
}

class DownloadingState extends State {
  constructor(download) {
    super();
    privateDownload.set(this, download);
  }
  get _download() {
    return privateDownload.get(this);
  }
  download() {
    throw new Error('You cannot download a file while it is being downloaded!');
  }
  pause() {
    this._download.setState(this._download.getDownloadPausedState());
    console.log('Download has been paused!');
  }
  fail() {
    this._download.setState(this._download.getDownloadedFailedState());
    console.log('Download has failed!');
  }
  finish() {
    this._download.setState(this._download.getDownloadedState());
    console.log('Download has finished!');
  }
}

class DownloadPausedState extends State {
  constructor(download) {
    super();
    privateDownload.set(this, download);
  }
  get _download() {
    return privateDownload.get(this);
  }
  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log('Resume Download!');
  }
  pause() {
    throw new Error('You cannot pause a download that is already paused!');
  }
  fail() {
    this._download.setState(this._download.getDownloadedFailedState());
    console.log('Download has failed!');
  }
  finish() {
    this._download.setState(this._download.getDownloadedState());
    console.log('Download has finished!');
  }
}

class DownloadedState extends State {
  constructor(download) {
    super();
    privateDownload.set(this, download);
  }
  get _download() {
    return privateDownload.get(this);
  }
  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log('Download again!');
  }
  pause() {
    throw new Error('You cannot pause a file if it is not being downloaded!');
  }
  fail() {
    throw new Error('A downloaded file cannot fail!');
  }
  finish() {
    throw new Error('A downloaded file cannot finish because it is already finished!');
  }
}

class DownloadFailedState extends State {
  constructor(download) {
    super();
    privateDownload.set(this, download);
  }
  get _download() {
    return privateDownload.get(this);
  }
  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log('Try to Download again!');
  }
  pause() {
    throw new Error('You cannot pause a download if it failed!');
  }
  fail() {
    throw new Error('A failed download cannot fail because it already failed!');
  }
  finish() {
    throw new Error('A failed download cannot be finished!');
  }
}

class Download {
  constructor() {
    this.state = new ReadyState(this);
  }
  setState(state) {
    this.state = state;
  }
  download() {
    this.state.download();
  }
  pause() {
    this.state.pause();
  }
  fail() {
    this.state.fail();
  }
  finish() {
    this.state.finish();
  }
  getReadyState() {
    return new ReadyState(this);
  }
  getDownloadingState() {
    return new DownloadingState(this);
  }
  getDownloadPausedState() {
    return new DownloadPausedState(this);
  }
  getDownloadedState() {
    return new DownloadedState(this);
  }
  getDownloadedFailedState() {
    return new DownloadFailedState(this);
  }
}

export { Download };
