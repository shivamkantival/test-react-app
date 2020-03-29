export type OnTimeout = (timer: PausableTimer) => void;

class PausableTimer {
  callback: OnTimeout;
  remainingTime: number;
  lastResumeTime: number | null;
  timer: ReturnType<typeof setTimeout> | null;

  constructor(
    onTimeout: OnTimeout,
    timeout: number,
    { startImmediately = false }: { startImmediately?: boolean }
  ) {
    this.callback = onTimeout;
    this.remainingTime = timeout;
    this.lastResumeTime = null;
    this.timer = null;

    startImmediately && this.start();
  }

  onTimeout = (): void => {
    this.remainingTime = 0;
    this.lastResumeTime = null;
    this.timer = null;

    this.callback(this);
  };

  start = (): void => {
    if (this.remainingTime) {
      this.timer = setTimeout(this.onTimeout, this.remainingTime);
      this.lastResumeTime = Date.now();
    }
  };

  pause = (): void => {
    if (this.timer && this.lastResumeTime) {
      clearTimeout(this.timer);
      this.remainingTime = this.remainingTime - (Date.now() - this.lastResumeTime);
      this.timer = null;
      this.lastResumeTime = null;
    }
  };

  finish = this.onTimeout;
}

export { PausableTimer };
