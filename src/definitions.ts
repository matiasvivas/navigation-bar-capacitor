export interface navigationBarPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  setNavigationBarColor(options: { color: string }): Promise<void>;
}
