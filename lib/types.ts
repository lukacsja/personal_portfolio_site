export type ContactsData = {
  github: {
    title: string;
    url: string;
    icon: string;
  };
  linkedin: {
    title: string;
    url: string;
    icon: string;
  };
  phone: {
    title: string;
    number: string;
    icon: string;
  };
  email: {
    title: string;
    address: string;
    icon: string;
  };
};

export type FormData = {
  senderName: string;
  senderEmail: string;
  formMessage: string;
};
