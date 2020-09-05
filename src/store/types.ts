export enum ReducersState {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}

export interface LoadableState<Template> {
  data: Template
  error: string | null
  status: ReducersState
}
