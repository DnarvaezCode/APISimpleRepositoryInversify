export abstract class BaseApplication {
  abstract setup(): Promise<void> | void;
}
