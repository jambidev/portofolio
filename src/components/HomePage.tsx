import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react";

interface HomePageProps {
  onNavigate?: (tab: string) => void;
}

const HomePage = ({ onNavigate = () => {} }: HomePageProps) => {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-full p-6 md:p-10 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#61dafb] mb-4">
          Selamat Datang di Portfolio Saya
        </h1>
        <div className="h-1 w-32 bg-[#61dafb] mb-6"></div>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Saya adalah seorang pengembang aplikasi berpengalaman yang berfokus
          pada pembuatan solusi digital yang inovatif dan efektif.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] shadow-lg">
          <div className="flex items-center mb-4">
            <Code className="text-[#61dafb] mr-3" size={24} />
            <h2 className="text-xl font-semibold">Keahlian Teknis</h2>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Frontend: React, Vue, Angular
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Backend: Node.js, Express, Django
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Mobile: React Native, Flutter
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Database: MongoDB, PostgreSQL, Firebase
            </li>
          </ul>
        </div>

        <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] shadow-lg">
          <div className="flex items-center mb-4">
            <Code className="text-[#61dafb] mr-3" size={24} />
            <h2 className="text-xl font-semibold">Layanan</h2>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Pengembangan Aplikasi Web
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Pengembangan Aplikasi Mobile
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              Konsultasi Teknologi
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-[#61dafb] rounded-full mr-2"></span>
              UI/UX Design
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 border-b border-[#3e3e42] pb-2">
          Tentang Saya
        </h2>
        <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] shadow-lg">
          <p className="text-gray-300 mb-4">
            Saya adalah seorang pengembang aplikasi dengan pengalaman lebih dari
            5 tahun dalam industri teknologi. Saya berspesialisasi dalam
            pembuatan aplikasi web dan mobile yang responsif, cepat, dan mudah
            digunakan.
          </p>
          <p className="text-gray-300 mb-4">
            Dengan latar belakang yang kuat dalam pengembangan frontend dan
            backend, saya mampu menangani proyek dari konsep awal hingga
            deployment. Saya selalu berusaha untuk mengikuti tren terbaru dalam
            teknologi dan menerapkannya dalam proyek-proyek saya.
          </p>
          <p className="text-gray-300">
            Saya percaya bahwa komunikasi yang baik dan pemahaman mendalam
            tentang kebutuhan klien adalah kunci untuk menghasilkan produk
            digital yang sukses.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 border-b border-[#3e3e42] pb-2">
          Proyek Terbaru
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#252526] rounded-lg border border-[#3e3e42] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Aplikasi E-Commerce
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Platform belanja online lengkap dengan sistem pembayaran,
                manajemen produk, dan analitik penjualan.
              </p>
              <Button
                variant="outline"
                className="text-[#61dafb] border-[#61dafb] hover:bg-[#61dafb] hover:text-black"
                onClick={() => onNavigate("portfolio")}
              >
                Lihat Detail <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg border border-[#3e3e42] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Aplikasi Manajemen Tugas
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Aplikasi produktivitas untuk mengelola tugas, proyek, dan
                kolaborasi tim dengan antarmuka yang intuitif.
              </p>
              <Button
                variant="outline"
                className="text-[#61dafb] border-[#61dafb] hover:bg-[#61dafb] hover:text-black"
                onClick={() => onNavigate("portfolio")}
              >
                Lihat Detail <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg border border-[#3e3e42] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Aplikasi Kesehatan</h3>
              <p className="text-gray-300 text-sm mb-4">
                Aplikasi pelacakan kesehatan dan kebugaran dengan fitur
                pemantauan aktivitas, nutrisi, dan statistik kesehatan.
              </p>
              <Button
                variant="outline"
                className="text-[#61dafb] border-[#61dafb] hover:bg-[#61dafb] hover:text-black"
                onClick={() => onNavigate("portfolio")}
              >
                Lihat Detail <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              Tertarik untuk bekerja sama?
            </h3>
            <p className="text-gray-300">
              Mari diskusikan proyek Anda dan buat ide Anda menjadi kenyataan.
            </p>
          </div>
          <div className="flex space-x-4">
           <a href="https://wa.link/imn2z1"><Button
              variant="default"
              className="bg-[#61dafb] text-black hover:bg-[#61dafb]/80"
            >
              Hubungi Saya
            </Button></a>
            <Button
              variant="outline"
              className="border-[#61dafb] text-[#61dafb] hover:bg-[#61dafb] hover:text-black"
              onClick={() => onNavigate("resume")}
            >
              Lihat Resume
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-[#61dafb] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://github.com/jambidev"
            className="text-gray-400 hover:text-[#61dafb] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#61dafb] transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
