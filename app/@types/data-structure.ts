export type NewsletterHeader = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  _createdAt: string;
};

export type Newsletter = {
  title: string;
  Introduction: [];
  footer: {
    title: string;
    content: [];
  };
  cover: {
    image: string;
  };
  news: [];
};

export type News = {
  title: string;
  image: string;
  theme: string;
  content: [];
  video: string;
};
