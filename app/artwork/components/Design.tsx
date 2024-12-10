"use client";
import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import BlogModal from "@/components/ui/blog-modal";
import f1 from "../../../components/assets/f1.jpg";
import f2 from "../../../components/assets/f2.jpg";
import f3 from "../../../components/assets/f3.jpg";
import f4 from "../../../components/assets/f4.jpg";
import f5 from "../../../components/assets/f5.jpg";
import f6 from "../../../components/assets/f6.jpg";
import f7 from "../../../components/assets/f7.jpg";
import f8 from "../../../components/assets/f8.jpg";
import f9 from "../../../components/assets/f9.jpg";

interface DesignProps {
  OnSectionClick?: (section: string) => void;
}

const ITEMS_PER_PAGE = 9; // Set jumlah gambar per halaman ke 9

const Design: React.FC<DesignProps> = ({ OnSectionClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null);

  const totalPages = Math.ceil(designs.length / ITEMS_PER_PAGE);

  const openModal = (design: typeof designs[0]) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDesign(null);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Mendapatkan item gambar untuk halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDesign = designs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          My Designs
        </h1>
      </div>
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentDesign.map((design, index) => (
            <div
              key={index}
              onClick={() => openModal(design)}
              className="cursor-pointer border rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img src={design.image.src} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-3 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-500 disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 flex justify-center items-center rounded-full border ${
              currentPage === i + 1
                ? "border-amber-100 bg-amber-400 text-bold"
                : "border-gray-400 text-gray-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-500 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>

      {isModalOpen && selectedDesign && (
        <BlogModal
          title={selectedDesign.title}
          description={selectedDesign.description || "No additional description provided."}
          image={selectedDesign.image.src}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

// Menggandakan gambar agar cukup untuk beberapa halaman pagination
export const designs = [
  {
    title: "ReactJS Landing Page",
    description: "A beautiful ReactJS landing page for modern applications.",
    image: f1,
  },
  {
    title: "MERN E-Commerce Web",
    description: "An advanced MERN e-commerce website with scalable features.",
    image: f2,
  },
  {
    title: "Portfolio Website",
    description: "Showcasing personal projects and skills in a professional manner.",
    image: f3,
  },
  {
    title: "Photography Showcase",
    description: "A stunning gallery showcasing photography skills and creativity.",
    image: f4,
  },
  {
    title: "Creative Web Design",
    description: "Innovative and aesthetically pleasing web designs.",
    image: f5,
  },
  {
    title: "Responsive Design Mastery",
    description: "Mastering responsive layouts for seamless user experience.",
    image: f6,
  },
  {
    title: "Photography Showcase",
    description: "A stunning gallery showcasing photography skills and creativity.",
    image: f7,
  },
  {
    title: "Creative Web Design",
    description: "Innovative and aesthetically pleasing web designs.",
    image: f8,
  },
  {
    title: "Responsive Design Mastery",
    description: "Mastering responsive layouts for seamless user experience.",
    image: f9,
  },
  // Tambahkan gambar yang sama untuk mengisi halaman berikutnya
  {
    title: "ReactJS Landing Page",
    description: "A beautiful ReactJS landing page for modern applications.",
    image: f1,
  },
  {
    title: "MERN E-Commerce Web",
    description: "An advanced MERN e-commerce website with scalable features.",
    image: f2,
  },
  {
    title: "Portfolio Website",
    description: "Showcasing personal projects and skills in a professional manner.",
    image: f3,
  },
  {
    title: "Photography Showcase",
    description: "A stunning gallery showcasing photography skills and creativity.",
    image: f4,
  },
  {
    title: "Creative Web Design",
    description: "Innovative and aesthetically pleasing web designs.",
    image: f5,
  },
  {
    title: "Responsive Design Mastery",
    description: "Mastering responsive layouts for seamless user experience.",
    image: f6,
  },
  {
    title: "Photography Showcase",
    description: "A stunning gallery showcasing photography skills and creativity.",
    image: f7,
  },
  {
    title: "Creative Web Design",
    description: "Innovative and aesthetically pleasing web designs.",
    image: f1,
  },
  {
    title: "Responsive Design Mastery",
    description: "Mastering responsive layouts for seamless user experience.",
    image: f2,
  },
];

export default Design;
