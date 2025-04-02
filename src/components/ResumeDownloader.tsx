import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeDownloaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  photoUrl?: string;
  className?: string;
}

const ResumeDownloader: React.FC<ResumeDownloaderProps> = ({
  name,
  title,
  email,
  phone,
  location,
  summary,
  photoUrl = "/profile-photo.jpg",
  className,
}) => {
  const generatePDF = async () => {
    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set document properties
    pdf.setProperties({
      title: `Resume - ${name}`,
      subject: "Professional Resume",
      author: name,
      keywords: "resume, cv, professional",
      creator: "Resume Generator",
    });

    // Add background color
    pdf.setFillColor(30, 30, 30);
    pdf.rect(0, 0, 210, 297, "F");

    // Add header
    pdf.setFillColor(37, 37, 38);
    pdf.rect(0, 0, 210, 60, "F");

    // Load profile photo
    try {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = photoUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Add profile photo
      pdf.addImage(img, "JPEG", 15, 15, 30, 30);
    } catch (error) {
      console.error("Error loading profile image:", error);
    }

    // Add name and title
    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(24);
    pdf.text(name, 55, 25);

    pdf.setTextColor(200, 200, 200); // Light gray
    pdf.setFontSize(16);
    pdf.text(title, 55, 35);

    // Add contact information
    pdf.setTextColor(150, 150, 150); // Gray
    pdf.setFontSize(10);
    pdf.text(`Email: ${email}`, 55, 45);
    pdf.text(`Phone: ${phone}`, 55, 50);
    pdf.text(`Location: ${location}`, 55, 55);

    // Add summary section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 70, 180, 40, "F");

    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(14);
    pdf.text("About Me", 20, 80);

    // Add summary text with word wrapping
    pdf.setTextColor(200, 200, 200); // Light gray
    pdf.setFontSize(10);
    const splitSummary = pdf.splitTextToSize(summary, 170);
    pdf.text(splitSummary, 20, 90);

    // Add education section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 120, 180, 80, "F");

    pdf.setTextColor(234, 179, 8); // Yellow color
    pdf.setFontSize(14);
    pdf.text("Pendidikan", 20, 130);

    // Education entries
    pdf.setTextColor(200, 200, 200); // Light gray
    pdf.setFontSize(12);
    pdf.text("Stmik Triguna Utama Kabupaten Bogor", 20, 140);
    
    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(10);
    pdf.text("S1 Teknik Informatika", 20, 145);
    
    pdf.setTextColor(150, 150, 150); // Gray
    pdf.text("2009 - 2013", 160, 140);
    pdf.text("IPK: 3.31", 20, 150);

    // Add more education entries
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("SMA Negeri 6 Kota Jambi", 20, 160);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("Jurusan IPA", 20, 165);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2006 - 2009", 160, 160);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("SMP Negeri 14 Kota Jambi", 20, 175);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("Kelas 2B", 20, 180);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2003 - 2006", 160, 175);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("SD Negeri 215 Kota Jambi", 20, 190);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("Sekolah Dasar", 20, 195);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2000 - 2003", 160, 190);

    // Add Technical Skills section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 210, 180, 80, "F");

    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(14);
    pdf.text("Keahlian Teknis", 20, 220);

    // Frontend skills
    pdf.setTextColor(200, 200, 200); // Light gray
    pdf.setFontSize(12);
    pdf.text("Frontend:", 20, 230);
    
    pdf.setTextColor(150, 150, 150); // Gray
    pdf.setFontSize(10);
    pdf.text("React, TypeScript, HTML, CSS, JavaScript", 70, 230);

    // Backend skills
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Backend:", 20, 240);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Node.js, Express, MongoDB, MySQL", 70, 240);

    // Design skills
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Design:", 20, 250);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Figma, Adobe XD", 70, 250);

    // Tools skills
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Tools:", 20, 260);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Git, Docker, AWS", 70, 260);

    // Add current learning
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Sedang Dipelajari:", 20, 270);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Microservices, React Native, Cloud Computing, UI/UX Design", 70, 270);

    // Add Projects section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 300, 180, 80, "F");

    pdf.setTextColor(234, 179, 8); // Yellow color
    pdf.setFontSize(14);
    pdf.text("Proyek", 20, 310);

    // Project entries
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Sistem Manajemen Inventaris", 20, 320);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Aplikasi web untuk pelacakan dan manajemen inventaris perusahaan", 20, 325);
    pdf.text("Teknologi: React, Node.js, MongoDB, Express, Chart.js", 20, 330);

    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Aplikasi E-Learning", 20, 340);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Platform pembelajaran online dengan fitur kursus interaktif", 20, 345);
    pdf.text("Teknologi: Vue.js, Laravel, MySQL, AWS, Socket.io", 20, 350);

    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Aplikasi Manajemen Proyek", 20, 360);
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Tool kolaboratif untuk tim dengan pelacakan tugas", 20, 365);
    pdf.text("Teknologi: React, GraphQL, Node.js, PostgreSQL", 20, 370);

    // Add Services section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 390, 180, 60, "F");

    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(14);
    pdf.text("Layanan", 20, 400);

    // Service entries
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("• Pengembangan Aplikasi Web Full Stack", 20, 410);
    pdf.text("• Pengembangan Aplikasi Mobile", 20, 420);
    pdf.text("• Konsultasi Teknologi dan Arsitektur Sistem", 20, 430);
    pdf.text("• Desain UI/UX dan Prototyping", 20, 440);

    // Add Contact section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 460, 180, 40, "F");

    pdf.setTextColor(234, 179, 8); // Yellow color
    pdf.setFontSize(14);
    pdf.text("Kontak", 20, 470);

    // Contact entries
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(10);
    pdf.text("Email: " + email, 20, 480);
    pdf.text("Telepon: " + phone, 20, 490);
    pdf.text("Alamat: " + location, 20, 500);

    // Add footer
    pdf.setFillColor(37, 37, 38);
    pdf.rect(0, 520, 210, 20, "F");
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(8);
    pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 530, { align: "center" });

    // Add second page for more content if needed
    pdf.addPage();
    
    // Set background color for second page
    pdf.setFillColor(30, 30, 30);
    pdf.rect(0, 0, 210, 297, "F");
    
    // Add header for second page
    pdf.setFillColor(37, 37, 38);
    pdf.rect(0, 0, 210, 40, "F");
    
    pdf.setTextColor(66, 153, 225); // Blue color
    pdf.setFontSize(18);
    pdf.text(name, 20, 20);
    
    pdf.setTextColor(200, 200, 200); // Light gray
    pdf.setFontSize(14);
    pdf.text(title, 20, 30);
    
    // Add Experience section
    pdf.setFillColor(45, 45, 45);
    pdf.rect(15, 50, 180, 120, "F");
    
    pdf.setTextColor(234, 179, 8); // Yellow color
    pdf.setFontSize(14);
    pdf.text("Pengalaman Kerja", 20, 60);
    
    // Experience entries
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Senior Full Stack Developer", 20, 70);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("KOMA SOLUTION", 20, 75);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2022 - Sekarang", 160, 70);
    pdf.text("Memimpin tim pengembangan untuk proyek-proyek enterprise, mengimplementasikan", 20, 85);
    pdf.text("arsitektur microservices, dan mengoptimalkan performa aplikasi.", 20, 90);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Frontend Developer", 20, 100);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("Kantor Walikota Kota Jambi", 20, 105);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2019 - 2022", 160, 100);
    pdf.text("Mengembangkan antarmuka pengguna yang responsif dan interaktif untuk berbagai", 20, 115);
    pdf.text("aplikasi web menggunakan React dan Vue.js di Aplikasi SPPSPM.", 20, 120);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Web Developer", 20, 130);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("PT. Bahtera inti Megah Jambi", 20, 135);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2017 - 2019", 160, 130);
    pdf.text("Membangun dan memelihara website perusahaan dan e-commerce dengan fokus pada", 20, 145);
    pdf.text("pengalaman pengguna dan optimasi SEO.", 20, 150);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(12);
    pdf.text("Guru TKJ", 20, 160);
    
    pdf.setTextColor(66, 153, 225);
    pdf.setFontSize(10);
    pdf.text("SMK Dharma Bhakti 1 Kota Jambi", 20, 165);
    
    pdf.setTextColor(150, 150, 150);
    pdf.text("2015 - 2017", 160, 160);
    
    // Add footer for second page
    pdf.setFillColor(37, 37, 38);
    pdf.rect(0, 277, 210, 20, "F");
    
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(8);
    pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 285, { align: "center" });
    
    // Save the PDF
    pdf.save(`resume-${name.replace(/\s+/g, "-").toLowerCase()}.pdf`);
  };

  return (
    <Button
      variant="default"
      className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 ${className}`}
      onClick={generatePDF}
    >
      <Download size={16} className="animate-bounce" />
      Unduh Resume
    </Button>
  );
};

export default ResumeDownloader;