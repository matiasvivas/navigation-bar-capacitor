export interface navigationBarPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
