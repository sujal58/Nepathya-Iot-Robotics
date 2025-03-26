import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
  const emailJs_templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const emailJs_serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJS_publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();

  interface formData {
    name: string;
    email: string;
    phone: number;
    messages: number | string;
  }

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    // Define templateParams (matching the fields in your email template)

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.messages,
    };

    // Send the email using EmailJS
    emailjs
      .send(emailJs_serviceId, emailJs_templateId, templateParams, {
        publicKey: emailJS_publicKey,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          toast({
            variant: "success",
            title: `Dear ${data.name}`,
            description: "Your message has been sent successfully!",
          });
          reset();
        },
        (error) => {
          console.log("FAILED...", error);
          toast({
            variant: "destructive",
            title: `Dear ${data.name}`,
            description: "Oops! Something went wrong.",
          });
        }
      );
  };
  return (
    <div className="flex relative justify-center items-center w-full h-full bg-gradient-to-r ">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md py-10 px-8 z-30">
        <h1 className="text-2xl font-semibold text-center mb-4 text-text-secondary">
          Contact Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                {...register("name", {
                  required: "Name cannot be empty.",
                })}
                placeholder="Name"
                className="w-full px-4 py-2 border-b-2 border-green-300 rounded-md focus:outline-none focus:ring-blue-500"
              />
              {errors.name && (
                <span className="text-red-600 text-center">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: "Enter a valid Email.",
                  },
                })}
                placeholder="E-mail"
                className="w-full px-4 py-2 border-b-2 border-green-300 rounded-md focus:outline-none  focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-600 text-center">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="tel"
                {...register("phone")}
                placeholder="Phone"
                className="w-full px-4 py-2 border-b-2 border-green-300 rounded-md focus:outline-none focus:ring-blue-500"
              />
              {errors.phone && (
                <span className="text-red-600 text-center">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("messages", {
                  required: "please mention your semester",
                })}
                placeholder="Enter your message here...."
                className="w-full px-4 py-2 border-b-2 border-green-300 rounded-md focus:outline-none focus:ring-blue-500"
              />
              {errors.messages && (
                <span className="text-red-600 text-center">
                  {errors.messages.message}
                </span>
              )}
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
