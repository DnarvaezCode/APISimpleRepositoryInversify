export abstract class BaseApplication {
  abstract main(): Promise<void> | void;
}
