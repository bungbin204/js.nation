let Config = new function() {
    // analyzer config
    this.temporalSmoothing = 0.1;
    this.minDecibels = -40;
    this.maxDecibels = -30;
    this.fftSize = 16384;

    // emblem config
    this.minEmblemSize = 360;
    this.maxEmblemSize = 540;
    this.maxShakeIntensity = Math.PI / 2;
    this.maxShakeDisplacement = 20;
    this.minShakeScalar = 0.9;
    this.maxShakeScalar = 1.2;

    // transform config
    this.startBin = 12;
    this.keepBins = 48;

    // spectrum config
    this.smoothingPasses = 1;
    this.smoothingPoints = 3;
    this.spectrumHeightScalar = 0.5;

    // particle config
    this.baseParticleCount = 1000; // particle count at 1080p
    this.particleOpacity = 0.6;

    // gui config
    this.guiTimeout = 2000;
    this.guiFadeTime = 350;
}
