export type Contact = {
  title: string;
  value: string;
  logo: string;
};

export type ContactsCategory = Contact[];

export type ContactsData = {
  personal: ContactsCategory;
  web: ContactsCategory;
};

export type FormData = {
  senderName: string,
  senderEmail: string,
  formMessage: string,
};


