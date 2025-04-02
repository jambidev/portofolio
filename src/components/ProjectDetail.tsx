import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Monitor, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Technology {
  name: string;
  icon?: React.ReactNode;
}

interface Screenshot {
  url: string;
  alt: string;
}

interface ProjectDetailProps {
  title?: string;
  description?: string;
  longDescription?: string;
  technologies?: Technology[];
  screenshots?: Screenshot[];
  liveUrl?: string;
  githubUrl?: string;
  onBack?: () => void;
}

const ProjectDetail = ({
  title = "Aplikasi Manajemen Inventaris",
  description = "Sistem manajemen inventaris berbasis web untuk perusahaan menengah dengan fitur pelacakan stok real-time dan laporan analitik.",
  longDescription = "Aplikasi Manajemen Inventaris adalah solusi komprehensif untuk perusahaan yang ingin mengoptimalkan pengelolaan stok barang mereka. Sistem ini dikembangkan dengan fokus pada kemudahan penggunaan dan efisiensi operasional. Fitur utama termasuk pelacakan stok real-time dengan teknologi barcode, notifikasi otomatis untuk stok menipis, pembuatan laporan analitik dengan visualisasi data interaktif, dan integrasi dengan sistem penjualan. Aplikasi ini telah berhasil membantu klien mengurangi kesalahan inventaris hingga 45% dan meningkatkan efisiensi operasional sebesar 30%.",
  technologies = [
    { name: "React" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "Tailwind CSS" },
    { name: "Docker" },
  ],
  screenshots = [
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      alt: "Dashboard aplikasi inventaris",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      alt: "Halaman manajemen stok",
    },
    {
      url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
      alt: "Laporan analitik",
    },
  ],
  liveUrl = "https://example.com/inventory-app",
  githubUrl = "https://github.com/username/inventory-app",
  onBack = () => console.log("Back button clicked"),
}: ProjectDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full overflow-y-auto bg-[#1e1e1e] text-white p-6"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 flex items-center gap-2 hover:bg-[#2d2d2d]"
      >
        <ArrowLeft size={16} />
        Kembali ke Daftar Proyek
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#252526] border-[#3e3e42] text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription className="text-gray-300 mt-2">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#569cd6]">
                    Deskripsi Proyek
                  </h3>
                  <p className="text-gray-300">{longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#569cd6]">
                    Teknologi yang Digunakan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#2d2d2d] rounded-md text-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-[#0e639c] hover:bg-[#1177bb] border-none text-white"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                <ExternalLink size={16} />
                Lihat Demo
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-[#333333] hover:bg-[#444444] border-none text-white"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github size={16} />
                Kode Sumber
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-[#252526] border-[#3e3e42] text-white h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <Monitor size={20} />
                  Screenshot
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="screenshot-0" className="w-full">
                <TabsList className="w-full flex bg-[#2d2d2d] mb-4">
                  {screenshots.map((_, index) => (
                    <TabsTrigger
                      key={index}
                      value={`screenshot-${index}`}
                      className="flex-1 data-[state=active]:bg-[#3e3e42]"
                    >
                      {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {screenshots.map((screenshot, index) => (
                  <TabsContent
                    key={index}
                    value={`screenshot-${index}`}
                    className="mt-0"
                  >
                    <div className="overflow-hidden rounded-md border border-[#3e3e42]">
                      <img
                        src={screenshot.url}
                        alt={screenshot.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-400 text-center">
                      {screenshot.alt}
                    </p>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Card className="bg-[#252526] border-[#3e3e42] text-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Code size={20} />
              Fitur Utama
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Pelacakan inventaris real-time dengan pembaruan otomatis</li>
              <li>
                Dashboard analitik dengan visualisasi data yang interaktif
              </li>
              <li>Sistem notifikasi untuk stok menipis dan pemesanan ulang</li>
              <li>Manajemen kategori dan tag untuk pengorganisasian produk</li>
              <li>
                Pencarian dan filter canggih untuk menemukan item dengan cepat
              </li>
              <li>
                Laporan yang dapat diekspor dalam berbagai format (PDF, CSV,
                Excel)
              </li>
              <li>Integrasi dengan sistem penjualan dan pembelian</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
