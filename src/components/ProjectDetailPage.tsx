import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

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

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi fetch data project berdasarkan ID
    const fetchProject = () => {
      setLoading(true);
      
      // Data project dummy (dalam aplikasi nyata, ini akan diambil dari API atau database)
      const defaultProjects: Project[] = [
        {
          id: 1,
          title: "Sistem Manajemen Inventaris",
          description:
            "Aplikasi web untuk pelacakan dan manajemen inventaris perusahaan dengan dashboard analitik dan sistem barcode terintegrasi.",
          fullDescription:
            "Sistem manajemen inventaris berbasis web yang komprehensif untuk memudahkan pelacakan stok barang, pemantauan aset perusahaan, dan mengotomatisasi proses pengadaan. Aplikasi ini menggunakan teknologi barcode untuk identifikasi cepat dan akurat, serta dilengkapi dengan dashboard analitik yang memberikan wawasan tentang pergerakan stok, nilai inventaris, dan prediksi kebutuhan di masa mendatang. Sistem ini telah terbukti mengurangi kesalahan inventaris hingga 45% dan meningkatkan efisiensi operasional sebesar 30% pada perusahaan yang mengimplementasikannya.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
          technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
          category: "web",
          demoUrl: "https://demo-inventaris.example.com",
          githubUrl: "https://github.com/username/inventaris-app",
          features: [
            "Dashboard analitik real-time dengan visualisasi data interaktif",
            "Sistem barcode dan QR code untuk pelacakan aset cepat",
            "Notifikasi otomatis untuk stok menipis dan pemesanan ulang",
            "Laporan inventaris yang dapat diekspor dalam berbagai format (PDF, CSV, Excel)",
            "Manajemen pengguna dengan berbagai tingkat akses dan audit trail",
          ],
        },
        {
          id: 2,
          title: "Aplikasi E-Learning",
          description:
            "Platform pembelajaran online dengan fitur kursus interaktif, kuis adaptif, dan sistem sertifikasi digital terintegrasi.",
          fullDescription:
            "Platform e-learning komprehensif yang dirancang untuk memfasilitasi pembelajaran jarak jauh dengan pengalaman yang interaktif dan menarik. Aplikasi ini menggunakan teknologi pembelajaran adaptif yang menyesuaikan konten berdasarkan kemampuan dan kemajuan siswa. Fitur unggulan meliputi kursus video berkualitas tinggi, materi pembelajaran interaktif dengan simulasi 3D, sistem kuis dan ujian dengan analisis jawaban, serta penerbitan sertifikat digital terverifikasi blockchain setelah menyelesaikan kursus. Platform ini telah digunakan oleh lebih dari 50 institusi pendidikan dengan tingkat penyelesaian kursus 78% lebih tinggi dibandingkan metode konvensional.",
          image:
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&q=80",
          technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Socket.io"],
          category: "web",
          demoUrl: "https://demo-elearning.example.com",
          githubUrl: "https://github.com/username/elearning-platform",
          features: [
            "Sistem manajemen konten pembelajaran dengan editor drag-and-drop",
            "Forum diskusi real-time dan ruang kolaborasi virtual",
            "Analitik kemajuan belajar dengan rekomendasi personalisasi",
            "Integrasi pembayaran multi-currency untuk kursus premium",
            "Aplikasi mobile companion dengan mode offline learning",
          ],
        },
        {
          id: 3,
          title: "Aplikasi Kesehatan Mobile",
          description:
            "Aplikasi pelacakan kesehatan dan kebugaran dengan AI prediktif dan integrasi perangkat wearable multi-platform.",
          fullDescription:
            "Aplikasi mobile yang komprehensif untuk memantau kesehatan dan kebugaran pengguna dengan teknologi kecerdasan buatan prediktif. Aplikasi ini terintegrasi dengan lebih dari 25 perangkat wearable populer untuk melacak aktivitas fisik, pola tidur, detak jantung, kadar oksigen darah, tingkat stres, dan metrik kesehatan lainnya. Fitur unggulan termasuk analisis AI yang dapat memprediksi potensi masalah kesehatan berdasarkan pola data, serta rekomendasi personalisasi untuk diet dan latihan. Pengguna dapat menetapkan tujuan kesehatan yang realistis, melacak kemajuan dengan visualisasi data yang komprehensif, dan berbagi laporan dengan profesional kesehatan melalui platform terintegrasi.",
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
            "Integrasi dengan 25+ perangkat wearable populer dari berbagai merek",
            "Pelacakan nutrisi dan kalori dengan scanner barcode makanan",
            "Program latihan AI yang menyesuaikan dengan kemajuan dan kondisi pengguna",
            "Visualisasi data kesehatan dengan tren dan prediksi jangka panjang",
            "Sistem notifikasi cerdas berdasarkan kebiasaan dan tujuan pengguna",
          ],
        },
        {
          id: 4,
          title: "Sistem Manajemen Restoran",
          description:
            "Solusi all-in-one dengan point-of-sale, manajemen inventaris, dan sistem pemesanan online untuk restoran dan kafe.",
          fullDescription:
            "Sistem manajemen restoran yang terintegrasi secara menyeluruh yang mencakup point-of-sale berbasis cloud, manajemen inventaris real-time, pemesanan meja online, dan analitik bisnis prediktif. Aplikasi ini dirancang khusus untuk memenuhi kebutuhan industri F&B modern dengan fitur yang membantu pemilik restoran dan kafe untuk mengoptimalkan operasi, mengurangi pemborosan hingga 35%, dan meningkatkan layanan pelanggan melalui antarmuka yang intuitif. Sistem ini juga menyediakan integrasi dengan platform pengiriman makanan populer dan aplikasi pembayaran digital, serta dilengkapi dengan modul CRM untuk program loyalitas pelanggan yang dapat meningkatkan tingkat kunjungan berulang hingga 25%.",
          image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
          technologies: ["Angular", "Django", "PostgreSQL", "Docker", "Stripe"],
          category: "web",
          demoUrl: "https://demo-restoran.example.com",
          githubUrl: "https://github.com/username/restaurant-management",
          features: [
            "Sistem POS berbasis cloud dengan antarmuka layar sentuh yang responsif",
            "Manajemen inventaris real-time dengan peringatan stok otomatis dan prediksi kebutuhan",
            "Sistem reservasi online dengan peta denah restoran interaktif",
            "Analitik bisnis dengan dashboard kinerja dan laporan keuangan terintegrasi",
            "Integrasi dengan multiple layanan pengiriman makanan dan aplikasi pembayaran digital",
          ],
        },
        {
          id: 5,
          title: "Aplikasi IoT Smart Home",
          description:
            "Platform terpadu untuk mengelola dan mengotomatisasi perangkat rumah pintar dengan AI prediktif dan keamanan tingkat lanjut.",
          fullDescription:
            "Platform IoT komprehensif untuk mengelola dan mengotomatisasi berbagai perangkat rumah pintar dengan fokus pada keamanan dan efisiensi energi. Aplikasi ini mendukung lebih dari 200 perangkat dari 50+ merek berbeda, memungkinkan pengguna untuk mengontrol pencahayaan, termostat, kamera keamanan, peralatan dapur, sistem irigasi, dan perangkat rumah pintar lainnya dari satu antarmuka terpadu yang intuitif. Fitur unggulan termasuk sistem AI prediktif yang mempelajari kebiasaan pengguna untuk mengoptimalkan penggunaan energi (menghemat hingga 30% biaya listrik), deteksi anomali untuk keamanan, dan otomatisasi canggih yang memungkinkan pengguna untuk membuat rutinitas kompleks berdasarkan waktu, lokasi, cuaca, kualitas udara, atau pemicu sensor lainnya. Sistem ini juga dilengkapi dengan enkripsi end-to-end dan protokol keamanan tingkat lanjut untuk melindungi privasi pengguna.",
          image:
            "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?w=500&q=80",
          technologies: ["Node.js", "MQTT", "React", "MongoDB", "Raspberry Pi"],
          category: "iot",
          demoUrl: "",
          githubUrl: "https://github.com/username/smart-home-platform",
          features: [
            "Kontrol terpusat untuk 200+ perangkat rumah pintar dari 50+ merek berbeda",
            "Otomatisasi canggih dengan kondisi multi-faktor (waktu, lokasi, cuaca, sensor)",
            "Integrasi dengan semua asisten suara populer (Google Assistant, Alexa, Siri)",
            "Analitik penggunaan energi dengan rekomendasi penghematan berbasis AI",
            "Sistem keamanan dengan deteksi anomali dan notifikasi real-time",
          ],
        },
        {
          id: 6,
          title: "Aplikasi Manajemen Proyek",
          description:
            "Tool kolaboratif untuk tim dengan pelacakan tugas otomatis, visualisasi timeline adaptif, dan ruang kerja virtual terintegrasi.",
          fullDescription:
            "Aplikasi manajemen proyek yang dirancang dengan pendekatan agile untuk meningkatkan kolaborasi tim dan produktivitas dalam lingkungan kerja modern. Platform ini menyediakan fitur pelacakan tugas otomatis dengan estimasi waktu berbasis AI, visualisasi timeline proyek yang adaptif, alokasi sumber daya cerdas, dan ruang kerja virtual terintegrasi untuk kolaborasi real-time. Dengan antarmuka yang intuitif dan kemampuan pelaporan yang kuat, aplikasi ini membantu tim untuk tetap terorganisir dan fokus pada tujuan proyek. Fitur unggulan termasuk analisis prediktif yang dapat mengidentifikasi potensi bottleneck dalam alur kerja, sistem notifikasi kontekstual, dan dashboard kustomisasi untuk berbagai peran dalam tim. Studi kasus menunjukkan peningkatan produktivitas tim hingga 40% dan pengurangan waktu penyelesaian proyek hingga 25% setelah mengimplementasikan platform ini.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
          technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "Socket.io"],
          category: "web",
          demoUrl: "https://demo-projectmanagement.example.com",
          githubUrl: "https://github.com/username/project-management-app",
          features: [
            "Papan Kanban interaktif, diagram Gantt, dan visualisasi alur kerja kustom",
            "Pelacakan waktu otomatis dengan analisis produktivitas dan prediksi penyelesaian",
            "Manajemen dokumen dengan versioning dan kolaborasi pengeditan real-time",
            "Ruang kerja virtual dengan video conference dan whiteboard kolaboratif terintegrasi",
            "Integrasi dengan 30+ alat pihak ketiga (GitHub, Slack, Google Workspace, dll)",
          ],
        },
      ];

      // Cari project berdasarkan ID
      const foundProject = defaultProjects.find(
        (p) => p.id === parseInt(id || "0")
      );
      
      setProject(foundProject || null);
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  const handleBack = () => {
    // Kembali ke halaman portfolio
    window.history.back();
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Memuat detail proyek...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e] text-white">
        <div className="text-center max-w-md mx-auto p-6 bg-[#252526] rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-red-400">Proyek Tidak Ditemukan</h2>
          <p className="text-gray-300 mb-6">Maaf, proyek yang Anda cari tidak ditemukan atau telah dihapus.</p>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Portfolio
          </Button>
        </div>
      </div>
    );
  }

  // Konversi data project ke format yang dibutuhkan oleh komponen ProjectDetail
  const projectDetailProps = {
    title: project.title,
    description: project.description,
    longDescription: project.fullDescription,
    technologies: project.technologies.map(tech => ({ name: tech })),
    screenshots: [
      {
        url: project.image,
        alt: `Screenshot ${project.title}`
      }
    ],
    liveUrl: project.demoUrl,
    githubUrl: project.githubUrl,
    onBack: handleBack
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-[#1e1e1e]"
    >
      <ProjectDetail {...projectDetailProps} />
    </motion.div>
  );
};

export default ProjectDetailPage;