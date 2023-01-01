import { Download } from './js/State';

const oDownload = new Download();

// Happy and regular flow
oDownload.download();
oDownload.pause();
oDownload.download();
oDownload.finish();

// Unhappy flows after finishing the download.
oDownload.pause();
oDownload.finish();
