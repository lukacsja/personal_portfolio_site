"use client";

import DropdownItem from "@/components/dropdown-item";
import PageTitle from "@/components/page-title";
import { contactsData } from "@/lib/data";
import React, { useState } from "react";
import { sendEmail } from "../api/send/route";

enum FieldErrors {
  SenderName = "Your name is required.",
  SenderEmail = "Please provide a valid email address.",
  FormMessage = "Don't forget to type your message!",
}

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    formMessage: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    senderName: "",
    senderEmail: "",
    formMessage: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setPending(true);
      await sendEmail(formData);
      setSubmitted(true);
      setFormData({
        senderName: "",
        senderEmail: "",
        formMessage: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setPending(false);
    }
  };

  const handleFieldErrors = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string,
    message: string
  ) => {
    event.preventDefault();

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));
  };

  return (
    <main
      className="flex-1 px-[27px] pt-[20px] pb-[24px] text-text-white 
    lg:flex lg:justify-center lg:items-center lg:py-0 lg:px-12 lg:gap-20"
    >
      <PageTitle title="_contact-me" />
      <div className="flex flex-col gap-[3px]">
        <DropdownItem title={"contacts"} list={contactsData.personal} />
        <DropdownItem title={"find-me-also-in"} list={contactsData.web} />
      </div>

      {submitted ? (
        <div className="mt-[42px] flex flex-col justify-center items-center gap-[20px]">
          <h2 className="text-[24px] text-text-white">Thank you! ✌️</h2>
          <p className="text-secondary-gray text-center mb-[10px]">
            Your message has been accepted. You will receive answer really soon!
          </p>
          <button
            className="w-[50%] bg-[#1C2B3A] rounded-lg text-text-white py-[10px] px-[14px] hover:bg-[#263B50] text-[14px] transition-all disabled:bg-opacity-50"
            onClick={() => setSubmitted(false)}
          >
            send-new-message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-[42px] gap-[18px] text-secondary-gray"
        >
          <div className="flex flex-col gap-[10px]">
            <span>_name:</span>
            <input
              type="text"
              value={formData.senderName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  senderName: e.target.value,
                }))
              }
              required
              onInvalid={(e) =>
                handleFieldErrors(e, "senderName", FieldErrors.SenderName)
              }
              className="bg-primary-medium border rounded-lg border-lines h-[42px] px-[15px] py-[5px]"
            />
            <span className="text-accent-rose text-[12px] pl-[5px]">
              {fieldErrors.senderName}
            </span>
          </div>

          <div className="flex flex-col gap-[10px]">
            <span>_email:</span>
            <input
              type="email"
              value={formData.senderEmail}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  senderEmail: e.target.value,
                }))
              }
              required
              onInvalid={(e) =>
                handleFieldErrors(e, "senderEmail", FieldErrors.SenderEmail)
              }
              className="bg-primary-medium border rounded-lg border-lines h-[42px] px-[15px] py-[5px]"
            />
            <span className="text-accent-rose text-[12px] pl-[5px]">
              {fieldErrors.senderEmail}
            </span>
          </div>

          <div className="flex flex-col gap-[10px]">
            <span>_message:</span>
            <textarea
              value={formData.formMessage}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  formMessage: e.target.value,
                }))
              }
              style={{ resize: "none" }}
              required
              onInvalid={(e) =>
                handleFieldErrors(e, "formMessage", FieldErrors.FormMessage)
              }
              maxLength={5000}
              className="bg-primary-medium border rounded-lg border-lines h-[145px] p-[15px]"
            />
            <span className="text-accent-rose text-[12px] pl-[5px]">
              {fieldErrors.formMessage}
            </span>
          </div>
          <button
            type="submit"
            disabled={pending}
            className="w-[50%] bg-[#1C2B3A] rounded-lg text-text-white py-[10px] px-[14px] hover:bg-[#263B50] text-[14px] transition-all disabled:bg-opacity-20"
          >
            submit-message
          </button>
        </form>
      )}
    </main>
  );
};

export default Contact;
