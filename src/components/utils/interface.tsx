export interface Settings {
  company_name?: string;
  contact_person?: string;
  email?: string;
  phone?: string;
  message?: string;
  policy_text?: string;
  button?: string;
  name?: string;
  private_person?: string;
  business?: string;
  title_flexible_trips?: string;
  select_customer_type?: string;
  heading?: string;
  travel_title?: string;
}

export interface SettingsProps {
  settings: Settings;
}

export interface ImageProps {
  filename: string;
  alt?: string;
  name: string;
}

export interface CardItem {
  title: string;
  price: string;

  img: {
    filename: string;
    alt: string;
  };
  content: any;
  second_content?: {
    content: React.ReactNode[];
  };
}

export interface InfoBlockElement {
  _uid?: string;
  title?: string;

  card: CardItem[];
  subtitle: string;
  image: {
    filename: string;
    alt: string;
  };

  video: boolean;
  image_right: boolean;
  second_image: {
    filename: string;
    alt: string;
  };

  third_image: {
    filename: string;
    alt: string;
  };

  tabel: TabelRowProps[];

  content: React.ReactNode[];
  dropdown_content: React.ReactNode[];
  second_content: React.ReactNode[];
  third_content: React.ReactNode[];

  read_less_btn: string;
  read_more_btn: string;
}

export interface InfoBlockProps {
  el: InfoBlockElement;
}

export interface TabelRowProps {
  country: string;
  dates: string;
  month: string;
  serie: string;
}
