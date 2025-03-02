declare module '@barba/core' {
  export interface IBarbaOptions {
    transitions?: any[];
    views?: any[];
    debug?: boolean;
    logLevel?: 'debug' | 'info' | 'warn' | 'error';
    prefetchIgnore?: boolean;
    cacheIgnore?: boolean | string[];
    preventRunning?: boolean;
    requestError?: (trigger: any, action: any, url: string, response: any) => boolean | void;
  }

  export interface IBarbaPlugin {
    name: string;
    version: string;
    install(barba: any): void;
    init(): void;
  }

  export interface ITransitionData {
    current: {
      container: HTMLElement;
      namespace: string;
      url: {
        hash: string;
        href: string;
        path: string;
        port: null | number | string;
        query: Record<string, string>;
      };
    };
    next: {
      container: HTMLElement;
      namespace: string;
      url: {
        hash: string;
        href: string;
        path: string;
        port: null | number | string;
        query: Record<string, string>;
      };
    };
    trigger: HTMLElement | null;
  }

  export interface ITransitionPage {
    name?: string;
    to?: { namespace: string[] | string; route?: string[] | string };
    from?: { namespace: string[] | string; route?: string[] | string };
    sync?: boolean;
    async?: boolean;
    once?(data: ITransitionData): Promise<void> | void;
    leave?(data: ITransitionData): Promise<void> | void;
    beforeLeave?(data: ITransitionData): Promise<void> | void;
    afterLeave?(data: ITransitionData): Promise<void> | void;
    enter?(data: ITransitionData): Promise<void> | void;
    beforeEnter?(data: ITransitionData): Promise<void> | void;
    afterEnter?(data: ITransitionData): Promise<void> | void;
  }

  export interface IBarba {
    version: string;
    init(options?: IBarbaOptions): void;
    use(plugin: IBarbaPlugin, options?: object): void;
    destroy(): void;
    hooks: any;
    prefetch(href: string): void;
    go(href: string, options?: object): void;
    force(href: string): void;
  }

  const barba: IBarba;
  export default barba;
} 