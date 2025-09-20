import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef();
    const [isloading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send("service_u2qv058", "template_slmk1ms", {
                from_name: form.name,
                to_name: "Paulin",
                from_email: form.email,
                to_email: "irakozepaulin12@gmail.com",
                message: form.message,
            },'0hdz-UxyyDMYbiSKC');

            setIsLoading(false);
            toast.success("Your message has been Sent!");
            setForm({
                name:'',
                email:'',
                message:''
            })
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            toast.error("Something went Wrong!");
        }
    };
    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen"
                />
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you are looking to build a website, Improve your existing
                        website,or bring a unique project to life,I am here to help.
                    </p>
                    <form
                        action=""
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Kujo Jotaro"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Jojo@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi I wanna give you a job..."
                                autoComplete="on"
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={isloading}>
                            {isloading ? "Sending..." : "Send Message"}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
