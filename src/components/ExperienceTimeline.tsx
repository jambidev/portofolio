import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  isActive?: boolean;
}

const TimelineItem = ({
  year = "2022 - Sekarang",
  title = "Senior Developer",
  company = "KOMA SOLUTION",
  description = "Mengembangkan aplikasi web dan mobile dengan teknologi terkini untuk klien enterprise.",
  skills = ["React", "Node.js", "TypeScript"],
  isActive = false,
}: TimelineItemProps) => {
  return (
    <motion.div
      className="mb-8 flex w-full items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mr-4">
        <div
          className={`rounded-full h-4 w-4 ${isActive ? "bg-blue-500" : "bg-gray-400"} z-10`}
        ></div>
        <div className="h-full w-0.5 bg-gray-300 -mt-2"></div>
      </div>

      <div className="flex-1 p-5 bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-blue-400 font-medium">{year}</span>
        </div>
        <p className="text-gray-300 font-medium mb-2">{company}</p>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 hover:bg-gray-600 text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ExperienceTimelineProps {
  experiences?: TimelineItemProps[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const defaultExperiences: TimelineItemProps[] = [
    {
      year: "2022 - Sekarang",
      title: "Senior Full Stack Developer",
      company: "KOMA SOLUTION",
      description:
        "Memimpin tim pengembangan untuk proyek-proyek enterprise, mengimplementasikan arsitektur microservices, dan mengoptimalkan performa aplikasi.",
      skills: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
      isActive: true,
    },
    {
      year: "2019 - 2022",
      title: "Frontend Developer",
      company: "Kantor Walikota Kota Jambi",
      description:
        "Mengembangkan antarmuka pengguna yang responsif dan interaktif untuk berbagai aplikasi web menggunakan React dan Vue.js. di Aplikasi SPPSPM",
      skills: ["React", "Vue.js", "JavaScript", "SCSS", "REST API"],
      isActive: false,
    },
    {
      year: "2017 - 2019",
      title: "Web Developer",
      company: "PT. Bahtera inti Megah Jambi",
      description:
        "Membangun dan memelihara website perusahaan dan e-commerce dengan fokus pada pengalaman pengguna dan optimasi SEO.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      isActive: false,
    },
    {
      year: "2015 - 2017",
      title: "Guru TKJ",
      company: "SMK Dharma Bhakti 1 Kota Jambi",
      description:
        "Berkontribusi dalam mendidik anak SMK dalam Mengajarkan mengembangkan teknologi informasi dan komunikasi.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      isActive: false,
    },
  ];

  const timelineItems = experiences || defaultExperiences;

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg">
      <motion.h2
        className="text-2xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pengalaman Kerja
      </motion.h2>

      <div className="relative">
        {timelineItems.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
