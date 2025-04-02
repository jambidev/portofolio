import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  subject: z.string().min(5, { message: "Subjek harus minimal 5 karakter" }),
  message: z.string().min(10, { message: "Pesan harus minimal 10 karakter" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    }, 1000);
  };

  return (
    <div
      className={`flex flex-col w-full h-full bg-[#1e1e1e] text-white p-6 ${className}`}
    >
      <div className="flex items-center mb-6 border-b border-[#333] pb-4">
        <h2 className="text-xl font-semibold text-[#cccccc]">Halaman My Kontak</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#61dafb]">
              Hubungi Saya
            </h3>
            <p className="text-[#cccccc] mb-6">
              Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu
              untuk menghubungi saya melalui formulir ini atau melalui kontak di
              bawah ini.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#61dafb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#888]">Email</p>
                  <p className="text-[#cccccc]">websitedev001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#61dafb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#888]">Telepon</p>
                  <p className="text-[#cccccc]">+62 822 7555 2225</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#61dafb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#888]">Lokasi</p>
                  <p className="text-[#cccccc]">Jambi, Jl. Dharma Karya No. 74 Kel. Kenali Asam Atas Kec. Kotabaru Kota Jambi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2d2d2d] p-6 rounded-md shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-[#61dafb] mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-center text-[#cccccc]">
                  Terima kasih telah menghubungi saya. Saya akan segera membalas
                  pesan Anda.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#cccccc]">Nama</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan nama Anda"
                            className="bg-[#3c3c3c] border-[#555] text-[#cccccc] focus-visible:ring-[#61dafb]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#cccccc]">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan email Anda"
                            type="email"
                            className="bg-[#3c3c3c] border-[#555] text-[#cccccc] focus-visible:ring-[#61dafb]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#cccccc]">Subjek</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan subjek pesan"
                            className="bg-[#3c3c3c] border-[#555] text-[#cccccc] focus-visible:ring-[#61dafb]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#cccccc]">Pesan</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tulis pesan Anda di sini"
                            className="bg-[#3c3c3c] border-[#555] text-[#cccccc] focus-visible:ring-[#61dafb] min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#61dafb] hover:bg-[#4fa8cc] text-black font-medium mt-4 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
