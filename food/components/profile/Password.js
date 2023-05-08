import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/register";
import { newPasswordSchema } from "../../schema/newPassword";
import axios from "axios";

const Password = ({ user }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user?._id}`, values);
      console.log(res, "res");
    } catch (error) {
      console.log(error, "error123123");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: user?.password,
      confirmPassword: user?.password,
    },
    onSubmit,
    validationSchema: newPasswordSchema,
  });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
        ))}
      </div>
      <button className="btn-primary mt-4" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;
