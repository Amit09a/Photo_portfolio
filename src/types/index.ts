export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}