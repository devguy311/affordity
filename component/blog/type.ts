export type BlogDataType = {
  id: number;
  img: string;
  date: Date;
  title: string;
  description: string;
  postedBy: string;
  subHeader: string;
  ytVideo: string;
  coverImageUrl: string;
  blogData: BlogDescriptionParaType[];
};

export type BlogDescriptionParaType = {
  title?: string;
  description?: string[];
  image?: string;
  quoteText?: QuoteType;
};

type QuoteType = {
  quote?: string;
  name?: string;
  designation?: string;
};

