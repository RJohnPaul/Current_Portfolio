"use client";

import * as Form from "@radix-ui/react-form";

import { useHooks } from "@/context/Provider";

import { SendButton } from "@/components/ui/SendButton";

import { Toast, successAlert, errorAlert } from "@/components/ui/Toast";

export function FormComponent() {
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

  async function sendEmail(e: React.FormEvent) {
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
        successAlert("E-mail enviado :D");

        setName("");
        setEmail("");
        setMessage("");
        setSubmitting(false);
      })
      .catch(() => {
        errorAlert("E-mail não enviado :(");
      });
  }

  return (
    <>
      <div className="w-full max-w-md">
        <Form.Root onSubmit={sendEmail}>
          <div className="mx-auto flex flex-col gap-4">
            <Form.Field name="text">
              <div className="flex items-center justify-between">
                <Form.Label className="py-2 text-sm font-medium text-neutral-400">
                  Nome
                </Form.Label>
                <Form.Message
                  className="text-xs font-medium text-red-500/70"
                  match="valueMissing"
                >
                  Insira um nome
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="w-7xl bg-tertiary w-full appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  autoComplete="off"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jordan Walke"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="question">
              <div className="flex items-center justify-between">
                <Form.Label className="py-2 text-sm font-medium text-neutral-400">
                  Email
                </Form.Label>
                <Form.Message
                  className="text-xs font-medium text-red-500/70"
                  match="valueMissing"
                >
                  Insira um email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="w-7xl bg-tertiary w-full appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
                  type="email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@walke.com"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="question">
              <div className="flex items-center justify-between">
                <Form.Label className="py-2 text-sm font-medium text-neutral-400">
                  Mensagem
                </Form.Label>
                <Form.Message
                  className="text-xs font-medium text-red-500/70"
                  match="valueMissing"
                >
                  Insira uma mensagem
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="w-7xl bg-tertiary h-20 w-full resize-none appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm leading-relaxed text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
                  autoComplete="off"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Como posso ajudá-lo?"
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <SendButton submitting={submitting} />
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
      <Toast />
    </>
  );
}
