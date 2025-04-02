import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Code,
  Layers,
  Database,
  Globe,
  Server,
  Smartphone,
  Github,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

interface PortfolioSectionProps {
  projects?: Project[];
}

const PortfolioSection = ({
  projects: propProjects,
}: PortfolioSectionProps) => {
  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "Sistem Manajemen Inventaris",
      description:
        "Aplikasi web untuk pelacakan dan manajemen inventaris perusahaan dengan dashboard analitik.",
      fullDescription:
        "Sistem manajemen inventaris berbasis web yang komprehensif untuk memudahkan pelacakan stok barang, pemantauan aset perusahaan, dan mengotomatisasi proses pengadaan. Aplikasi ini dilengkapi dengan dashboard analitik yang memberikan wawasan tentang pergerakan stok, nilai inventaris, dan prediksi kebutuhan di masa mendatang.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "web",
      demoUrl: "https://demo-inventaris.example.com",
      githubUrl: "https://github.com/username/inventaris-app",
      features: [
        "Dashboard analitik real-time",
        "Sistem barcode untuk pelacakan aset",
        "Notifikasi stok minimum",
        "Laporan inventaris yang dapat diekspor",
        "Manajemen pengguna dengan berbagai tingkat akses",
      ],
    },
    {
      id: 2,
      title: "Aplikasi E-Learning",
      description:
        "Platform pembelajaran online dengan fitur kursus interaktif, kuis, dan sertifikasi.",
      fullDescription:
        "Platform e-learning komprehensif yang dirancang untuk memfasilitasi pembelajaran jarak jauh dengan pengalaman yang interaktif dan menarik. Aplikasi ini menyediakan berbagai fitur seperti kursus video, materi pembelajaran interaktif, sistem kuis dan ujian, serta penerbitan sertifikat digital setelah menyelesaikan kursus.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&q=80",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Socket.io"],
      category: "web",
      demoUrl: "https://demo-elearning.example.com",
      githubUrl: "https://github.com/username/elearning-platform",
      features: [
        "Sistem manajemen konten pembelajaran",
        "Forum diskusi untuk setiap kursus",
        "Analitik kemajuan belajar",
        "Integrasi pembayaran untuk kursus premium",
        "Aplikasi mobile companion",
      ],
    },
    {
      id: 3,
      title: "Aplikasi Kesehatan Mobile",
      description:
        "Aplikasi pelacakan kesehatan dan kebugaran dengan integrasi perangkat wearable.",
      fullDescription:
        "Aplikasi mobile yang komprehensif untuk memantau kesehatan dan kebugaran pengguna. Aplikasi ini terintegrasi dengan berbagai perangkat wearable untuk melacak aktivitas fisik, pola tidur, detak jantung, dan metrik kesehatan lainnya. Pengguna dapat menetapkan tujuan, melacak kemajuan, dan menerima rekomendasi yang dipersonalisasi.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Bluetooth API",
        "HealthKit",
      ],
      category: "mobile",
      demoUrl: "",
      githubUrl: "https://github.com/username/health-tracker-app",
      features: [
        "Integrasi dengan perangkat wearable populer",
        "Pelacakan nutrisi dan kalori",
        "Program latihan yang dapat disesuaikan",
        "Visualisasi data kesehatan",
        "Pengingat dan notifikasi yang dapat dikonfigurasi",
      ],
    },
    {
      id: 4,
      title: "Sistem Manajemen Restoran",
      description:
        "Solusi point-of-sale dan manajemen inventaris untuk restoran dan kafe.",
      fullDescription:
        "Sistem manajemen restoran yang terintegrasi yang mencakup point-of-sale, manajemen inventaris, pemesanan meja, dan analitik bisnis. Aplikasi ini membantu pemilik restoran dan kafe untuk mengoptimalkan operasi, mengurangi pemborosan, dan meningkatkan layanan pelanggan melalui antarmuka yang intuitif dan fitur yang komprehensif.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker", "Stripe"],
      category: "web",
      demoUrl: "https://demo-restoran.example.com",
      githubUrl: "https://github.com/username/restaurant-management",
      features: [
        "Sistem POS dengan antarmuka layar sentuh",
        "Manajemen inventaris dan peringatan stok",
        "Sistem reservasi online",
        "Analitik penjualan dan laporan",
        "Integrasi dengan layanan pengiriman makanan",
      ],
    },
    {
      id: 5,
      title: "Aplikasi IoT Smart Home",
      description:
        "Platform untuk mengelola dan mengotomatisasi perangkat rumah pintar.",
      fullDescription:
        "Platform IoT komprehensif untuk mengelola dan mengotomatisasi berbagai perangkat rumah pintar. Aplikasi ini memungkinkan pengguna untuk mengontrol pencahayaan, termostat, kamera keamanan, dan perangkat rumah pintar lainnya dari satu antarmuka terpadu. Fitur otomatisasi memungkinkan pengguna untuk membuat rutinitas dan skenario berdasarkan waktu, lokasi, atau pemicu lainnya.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?w=500&q=80",
      technologies: ["Node.js", "MQTT", "React", "MongoDB", "Raspberry Pi"],
      category: "iot",
      demoUrl: "",
      githubUrl: "https://github.com/username/smart-home-platform",
      features: [
        "Kontrol terpusat untuk semua perangkat rumah pintar",
        "Otomatisasi berdasarkan waktu, lokasi, dan sensor",
        "Integrasi dengan asisten suara populer",
        "Analitik penggunaan energi",
        "Sistem keamanan dengan notifikasi",
      ],
    },
    {
      id: 6,
      title: "Aplikasi Manajemen Proyek",
      description:
        "Tool kolaboratif untuk tim dengan pelacakan tugas, timeline, dan diskusi.",
      fullDescription:
        "Aplikasi manajemen proyek yang dirancang untuk meningkatkan kolaborasi tim dan produktivitas. Platform ini menyediakan fitur pelacakan tugas, timeline proyek, alokasi sumber daya, dan ruang diskusi terpadu. Dengan antarmuka yang intuitif dan kemampuan pelaporan yang kuat, aplikasi ini membantu tim untuk tetap terorganisir dan fokus pada tujuan proyek.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "Socket.io"],
      category: "web",
      demoUrl: "https://demo-projectmanagement.example.com",
      githubUrl: "https://github.com/username/project-management-app",
      features: [
        "Papan Kanban dan diagram Gantt",
        "Pelacakan waktu dan kemajuan",
        "Manajemen dokumen dan berbagi file",
        "Kolaborasi tim real-time",
        "Integrasi dengan alat pihak ketiga",
      ],
    },
  ];

  const [projects] = useState<Project[]>(propProjects || defaultProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    { id: "all", name: "Semua", icon: <Layers className="h-4 w-4" /> },
    { id: "web", name: "Web", icon: <Globe className="h-4 w-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
    { id: "backend", name: "Backend", icon: <Server className="h-4 w-4" /> },
    { id: "iot", name: "IoT", icon: <Database className="h-4 w-4" /> },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProjectClick = (project: Project) => {
    // Alih-alih membuka dialog, arahkan ke halaman detail project
    window.location.href = `/project/${project.id}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2 text-zinc-100 flex items-center">
            <Code className="mr-2" /> Portfolio Proyek
          </h1>
          <p className="text-zinc-400 max-w-3xl">
            Berikut adalah kumpulan proyek aplikasi yang telah saya kembangkan.
            Setiap proyek menunjukkan keahlian teknis dan pendekatan pemecahan
            masalah dalam berbagai domain dan teknologi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
            <Input
              type="text"
              placeholder="Cari proyek..."
              className="pl-10 bg-zinc-900 border-zinc-800 text-zinc-300 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-zinc-500" />
            <span className="text-zinc-400 mr-2">Filter:</span>
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full md:w-auto"
            >
              <TabsList className="bg-zinc-900 border border-zinc-800">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 flex items-center gap-1"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-zinc-400">
            <h3 className="text-xl font-medium mb-2">
              Tidak ada proyek yang ditemukan
            </h3>
            <p>Coba ubah filter atau kata kunci pencarian Anda</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-zinc-900 text-zinc-100 border-zinc-800 max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-zinc-100">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <div className="rounded-md overflow-hidden h-64 md:h-80">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2 text-zinc-200">
                      Deskripsi Proyek
                    </h3>
                    <p className="text-zinc-300">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2 text-zinc-200">
                      Fitur Utama
                    </h3>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2 text-zinc-200">
                      Teknologi
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-4">
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                        asChild
                      >
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> Lihat Kode
                        </a>
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="mr-2 h-4 w-4" /> Demo Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PortfolioSection;
