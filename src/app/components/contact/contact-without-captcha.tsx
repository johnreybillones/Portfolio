"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/../utils/check-email";
import { User, Mail, MessageSquare } from "lucide-react";

const ContactWithoutCaptcha = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = input.name.trim();
    const email = input.email.trim();
    const message = input.message.trim();

    setStatusMessage(null);

    if (!name || !email || !message) {
      setError({ email: false, required: true });
      return;
    }

    if (!isValidEmail(email)) {
      setError({ email: true, required: false });
      return;
    }

    setError({ email: false, required: false });

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    if (!serviceID || !templateID || !publicKey) {
      const message =
        "The contact form is not configured yet. Please email jrfbillones@gmail.com directly.";
      setStatusMessage({ type: "error", text: message });
      toast.error(message);
      return;
    }

    const options = {
      publicKey,
    };

    const templateParams = {
      to_email: "jrfbillones@gmail.com",
      from_name: name,
      from_email: email,
      reply_to: email,
      email,
      message: `${message}\n\nReply-to: ${email}`,
    };

    try {
      setIsLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        options,
      );

      if (res.status === 200) {
        const message = "Message sent successfully!";
        toast.success(message);
        setStatusMessage({ type: "success", text: message });
        setInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Email service did not confirm the message.");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send the message right now.";
      toast.error(message);
      setStatusMessage({ type: "error", text: message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Send a Message
          </h3>
          <p className="text-slate-400 text-sm">
            I'll get back to you within 24 hours.
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSendMail}
          noValidate
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              <User className="w-4 h-4" />
              Your Name
            </label>
            <input
              className="bg-white/5 w-full border border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-white/10 ring-0 outline-0 transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600"
              type="text"
              placeholder="John Doe"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              <Mail className="w-4 h-4" />
              Your Email
            </label>
            <input
              className={`bg-white/5 w-full border rounded-2xl focus:bg-white/10 ring-0 outline-0 transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600 ${error.email ? "border-red-500/50" : "border-white/10 focus:border-red-500/50"}`}
              type="email"
              placeholder="john@example.com"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && (
              <p className="text-xs text-red-500 ml-1">
                Please provide a valid email address.
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              <MessageSquare className="w-4 h-4" />
              Your Message
            </label>
            <textarea
              className="bg-white/5 w-full border border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-white/10 ring-0 outline-0 transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600 resize-none"
              placeholder="Tell me about your project..."
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {error.required && (
              <p className="text-sm text-red-500 text-center font-medium">
                Oops! Looks like some fields are still empty.
              </p>
            )}

            {statusMessage && (
              <p
                className={`text-sm text-center font-medium ${
                  statusMessage.type === "success"
                    ? "text-emerald-400"
                    : "text-red-500"
                }`}
                role="status"
              >
                {statusMessage.text}
              </p>
            )}

            <button
              type="submit"
              className="relative group/btn overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-900 p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover/btn:bg-transparent transition-all rounded-[15px] px-8 py-4 text-white font-bold uppercase tracking-widest text-sm">
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Message
                    <TbMailForward className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* Decorative Accent */}
      <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-20 rounded-full" />
    </div>
  );
};

export default ContactWithoutCaptcha;
