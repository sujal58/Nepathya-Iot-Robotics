import vector1 from "../../../assets/background.svg";
import vector2 from "../../../assets/background1.png";
import { useForm, SubmitHandler } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  interface formData {
    name: string;
    email: string;
    phone: number;
    semester: number | string;
  }

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex relative justify-center items-center w-full min-h-screen bg-gradient-to-r from-teal-500 to-text-secondary bg-gray-100 ">
      <img src={vector1} alt="" className="absolute bottom-0 z-10 w-full" />
      <img
        src={vector2}
        alt=""
        className="absolute right-0 bottom-0 h-96 w-full z-20"
      />
      <div className="bg-white shadow-lg rounded-xl z-40 w-full max-w-md py-10 px-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-text-secondary">
          Registration Form
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
                className="w-full px-4 py-2 border-b-2 border-green-200 rounded-md focus:outline-none focus:ring-blue-500"
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
                className="w-full px-4 py-2 border-b-2 border-green-200 rounded-md focus:outline-none  focus:ring-blue-500"
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
                className="w-full px-4 py-2 border-b-2 border-green-200 rounded-md focus:outline-none focus:ring-blue-500"
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
                {...register("semester", {
                  required: "please mention your semester",
                })}
                placeholder="Semester"
                className="w-full px-4 py-2 border-b-2 border-green-200 rounded-md focus:outline-none focus:ring-blue-500"
              />
              {errors.semester && (
                <span className="text-red-600 text-center">
                  {errors.semester.message}
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

export default Form;
