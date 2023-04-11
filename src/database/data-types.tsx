// NAVBAR LINKS
export type NavLink = {
  text: { english: string; spanish: string };
  icon: string;
  href: string;
  key: string;
};

// HERO SECTION
export type Hero = {
  [key: string]: {
    greeting: string;
    firstPart: string;
    prep: string;
    typing: string[];
  };
};

// SECTION HEADINGS
type HeadingContent = {
  title: string;
  subtitle: string;
};

export type Heading = {
  [key: string]: HeadingContent;
};

export type Headings = {
  [key: string]: Heading;
};

// ABOUT SECTION
export type About = {
  vignettes: { [key: string]: string[] };
  titles: { [key: string]: { [key: string]: string } };
};

export type Trait = {
  title: { [key: string]: string };
  content: { [key: string]: string };
  icon: string;
};

// CERTIFICATIONS SECTION
export type Certification = {
  image: any;
  institute: string;
  alt: string;
  href: string;
  text: { [key: string]: string[] };
  date: { [key: string]: string };
  complexity: number;
};

// PROJECTS SECTION
export type ProjectObj = {
  title: string;
  link: string;
  num: string;
  info: ({ [key: string]: string } | string)[];
  extraInfo?: { [key: string]: JSX.Element };
};

export type ProjectOpts = {
  list: string[];
  btn: {
    big: string;
    small: string;
    all: string;
  };
};

export type Projects = {
  opts: {
    [key: string]: ProjectOpts;
  };
  arr: ProjectObj[];
};

// CONTACT SECTION
type ContactLink = {
  href: string;
  icon: string;
  text: string | { [key: string]: string };
};

export type Contact = {
  links: ContactLink[];
  languages: {
    [key: string]: {
      title: string;
      subtitle: string;
      comment: string;
    };
  };
};

// FOOTER
export type Footer = {
  [key: string]: {
    icons8: string;
    otherText: string[];
  };
};
