import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Award, Code } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsDisplay from "./SkillsDisplay";
import ResumeDownloader from "./ResumeDownloader";

interface ResumeProps {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  summary?: string;
  resumeUrl?: string;
  photoUrl?: string;
}

const ResumeSection = ({
  name = "Mardianto Eka Saputra, S.Kom",
  title = "Senior Full Stack Developer",
  email = "websitedev@gmail.com",
  phone = "0822 7555 2225",
  location = "Jambi, Jl. Dharma Karya No. 74 Kel. Kenali Asam Atas Kec. Kotabaru Kota Jambi",
  summary = "Pengembang full stack berpengalaman dengan keahlian dalam React, Node.js, dan TypeScript. Memiliki pengalaman lebih dari 7 tahun dalam pengembangan aplikasi web dan mobile dengan fokus pada performa dan pengalaman pengguna yang optimal.",
  resumeUrl = "#",
  photoUrl = "/profile-photo.jpg",
}: ResumeProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-[#1e1e1e] text-white overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with profile info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 p-6 bg-[#252526] rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Avatar className="h-24 w-24 border-2 border-blue-500 shadow-lg">
              <AvatarImage src={photoUrl} alt={name} />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-blue-400">{name}</h1>
              <p className="text-xl text-gray-300 mt-1">{title}</p>
              <div className="mt-4 space-y-1 text-gray-400">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{location}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <ResumeDownloader
              name={name}
              title={title}
              email={email}
              phone={phone}
              location={location}
              summary={summary}
              photoUrl={photoUrl}
              className="shadow-lg"
            />
          </div>
        </div>

        {/* VS Code inspired tabs */}
        <Tabs
          defaultValue="profile"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full bg-[#252526] p-0 h-auto">
            <TabsTrigger
              value="profile"
              className={`data-[state=active]:bg-[#1e1e1e] data-[state=active]:border-t-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3 ${activeTab === "profile" ? "text-white" : "text-gray-400"}`}
            >
              <FileText className="mr-2 h-4 w-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className={`data-[state=active]:bg-[#1e1e1e] data-[state=active]:border-t-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3 ${activeTab === "experience" ? "text-white" : "text-gray-400"}`}
            >
              <Award className="mr-2 h-4 w-4" />
              Pengalaman
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className={`data-[state=active]:bg-[#1e1e1e] data-[state=active]:border-t-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3 ${activeTab === "skills" ? "text-white" : "text-gray-400"}`}
            >
              <Code className="mr-2 h-4 w-4" />
              Keahlian
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="profile"
            className="mt-6 bg-[#1e1e1e] border-none p-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-[#252526] rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Tentang Saya
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{summary}</p>

              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4 text-yellow-400 border-b border-gray-700 pb-2">
                  Pendidikan
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Stmik Triguna Utama Kabupaten Bogor</h4>
                      <span className="text-gray-400">2009 - 2013</span>
                    </div>
                    <p className="text-blue-400">S1 Teknik Informatika</p>
                    <p className="text-gray-400 mt-2">IPK: 3.31</p>
                  </div>

                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">SMA Negeri 6 Kota Jambi</h4>
                      <span className="text-gray-400">2006 - 2009</span>
                    </div>
                    <p className="text-blue-400">Jurusan IPA</p>
                  </div>

                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">SMP Negeri 14 Kota Jambi</h4>
                      <span className="text-gray-400">2003 - 2006</span>
                    </div>
                    <p className="text-blue-400">Kelas 2B</p>
                  </div>

                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">SD Negeri 215 Kota Jambi</h4>
                      <span className="text-gray-400">2000 - 2003</span>
                    </div>
                    <p className="text-blue-400">Sekolah Dasar</p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8">
                <h3 className="text-xl font-medium mb-4 text-green-400 border-b border-gray-700 pb-2">
                  Sertifikasi
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">AWS Certified Developer</h4>
                      <span className="text-gray-400">2022</span>
                    </div>
                    <p className="text-gray-400 mt-1">Amazon Web Services</p>
                  </div>

                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">
                        Professional Scrum Master I
                      </h4>
                      <span className="text-gray-400">2020</span>
                    </div>
                    <p className="text-gray-400 mt-1">Scrum.org</p>
                  </div>

                  <div className="bg-[#2d2d2d] p-4 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">
                        React Developer Certification
                      </h4>
                      <span className="text-gray-400">2019</span>
                    </div>
                    <p className="text-gray-400 mt-1">Meta (Facebook)</p>
                  </div>
                </div> 
               </div> */}
            </motion.div>
          </TabsContent>

          <TabsContent
            value="experience"
            className="mt-6 bg-[#1e1e1e] border-none p-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExperienceTimeline />
            </motion.div>
          </TabsContent>

          <TabsContent
            value="skills"
            className="mt-6 bg-[#1e1e1e] border-none p-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsDisplay />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeSection;
