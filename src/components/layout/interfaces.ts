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

export interface ISocialLinks {
  links: ISocial;
}

export interface ISocial {
  github?: string;
  linkedin?: string;
  medium?: string;
  email?: string;
}

export interface IHeader {
  path: string;
  links: IPageLink[]
}

export interface IPageLinks {
  links: IPageLink[];
  path: string;
}

export interface IPageLink {
  name: string;
  no: string;
}