import { useState } from "react";

export const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className="bg-slate-700 h-[82vh]">
      <h2 className="header text-white pt-20 contact">CONTACT</h2>
      <div className="">
        <form className="grid justify-center w-[100vw] py-24 ">
          <input
            type="text"
            onChange={handleChange}
            value={form.name}
            name="name"
            placeholder="name"
            className="bg-slate-800 w-[70vw]  md:w-[50vw] lg:w-[40vw] py-1 px-1 text-slate-300"
          ></input>
          <input
            onChange={handleChange}
            value={form.email}
            type="text"
            name="email"
            placeholder="email"
            className="bg-slate-800 text-slate-300 py-1 px-1 my-1"
          ></input>
          <textarea
            onChange={handleChange}
            value={form.message}
            className="bg-slate-800 text-slate-300 h-32 mb-2 px-1 resize-none "
            type="text"
            placeholder="message"
            name="message"
          ></textarea>
          <button className="border-2 border-fed-500 w-[20vw] text-white px-4 py-1 ml-auto hover:bg-red-500 hover:border-red-500 transition-all ">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;