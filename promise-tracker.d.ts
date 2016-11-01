/// <reference types="angular" />

declare module 'angular-promise-tracker' {
  import promiseTracker = angular.promisetracker;
  export = promiseTracker;
}

declare namespace angular.promisetracker {
  interface PromiseTrackerOptions {
    activationDelay: number;
    minDuration: number;
  }

  interface PromiseTracker {
    active(): boolean;
    tracking(): boolean;
    trackingCount(): number;
    addPromise<T>(promise: angular.IPromise<T>): angular.IDeferred<void>;
    createPromise(): angular.IDeferred<void>;
    cancel(): void;
  }

  interface PromiseTrackerService {
    (options?: PromiseTrackerOptions): PromiseTracker;
  }
}
