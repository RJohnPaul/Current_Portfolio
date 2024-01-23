"use client";

import * as Form from "@radix-ui/react-form";

import toast from "react-hot-toast";

import { useHooks } from "@/contexts/Provider";

import { SendButton } from "@/components/elements/SendButton";

import { ToastMessage } from "@/components/elements/Toast";

const FormComponent = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitting,
    setSubmitting,
  } = useHooks();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    })
      .then(() => {
        toast.success(
          <ToastMessage
            title="Success"
            message="E-mail has sucessfully reached."
          />,
        );

        setName("");
        setEmail("");
        setMessage("");
        setSubmitting(false);
      })
      .catch(() => {
        toast.error(
          <ToastMessage
            title="Message Failed"
            message="Please Check your internet connection."
          />,
        );
      });
  };

  return (
    <Form.Root onSubmit={sendEmail}>
      <div className="mx-auto flex flex-col gap-4">
        <div className="flex flex-1 items-center gap-4 sm:flex-col md:flex-row">
          <Form.Field name="text" className="w-full">
            <Form.Control asChild>
              <input
                className="w-full appearance-none rounded-lg border border-border bg-muted p-3 text-sm text-primary/60 outline-none duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-border data-[invalid]:border-red-500"
                type="text"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="question" className="w-full">
            <Form.Control asChild>
              <input
                className="w-full appearance-none rounded-lg border border-border bg-muted p-3 text-sm text-primary/60 outline-none duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-border data-[invalid]:border-red-500"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Control>
          </Form.Field>
        </div>
        <Form.Field name="question">
          <Form.Control asChild>
            <textarea
              className="w-7xl h-44 w-full resize-none appearance-none rounded-lg border border-border bg-muted p-3 text-sm leading-relaxed text-primary/60 outline-none duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-border data-[invalid]:border-red-500"
              autoComplete="off"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <SendButton submitting={submitting} />
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export { FormComponent };
