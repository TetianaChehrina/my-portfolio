"use client";

import { useForm } from "react-hook-form";
import { ContactFormData } from "../../types/form";
import styles from "./styles/ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok)
        throw new Error(result.error || "Failed to send message");

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Error sending message");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        data-aos="zoom-in-up"
      >
        <label className={styles.label}>
          Name
          <input
            {...register("name", { required: "Name is required" })}
            className={styles.input}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </label>

        <label className={styles.label}>
          Email
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email format",
              },
            })}
            className={styles.input}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>

        <label className={styles.label}>
          Message
          <textarea
            {...register("message", { required: "Message is required" })}
            className={styles.textarea}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </label>

        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
