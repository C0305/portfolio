export interface ILayout {
  title: string;
  location: {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string
    state: any
  }
}

export interface ILinks {
  github?: string;
  linkedin?: string;
  medium?: string;
}