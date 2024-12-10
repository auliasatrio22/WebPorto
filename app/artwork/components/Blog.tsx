"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import BlogModal from "@/components/ui/blog-modal";
import f1 from "../../../components/assets/f1.jpg";
import f2 from "../../../components/assets/f2.jpg";
import f3 from "../../../components/assets/f3.jpg";

interface BlogProps {
  OnSectionClick?: (section: string) => void;
}

export const blog = [
  {
    title: "Blog Pertama",
    description:
      "Developed a responsive submissions. Developed a responsive submissions. Developed a responsive submissions.",
    link: "",
    image: f1.src,
  },
  {
    title: "Blog Kedua",
    description:
      "Developed a responsive submissions. Developed a responsive submissions. Developed a responsive submissions.",
    link: "",
    image: f2.src,
  },
  {
    title: "Blog Ketiga",
    description:
      "Developed a responsive submissions. Developed a responsive submissions. Developed a responsive submissions.",
    link: "",
    image: f3.src,
  },
];

const Blog: React.FC<BlogProps> = ({ OnSectionClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<typeof blog[0] | null>(null);

  const openModal = (blogItem: typeof blog[0]) => {
    setSelectedBlog(blogItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen ">
      <AnimatedSection>
        <br />
        <br />
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          My Blogs
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blog.map((item, index) => (
            <div key={index} className="dark:bg-black shadow-lg rounded-lg overflow-hidden border-4 border-amber-300 hover:border-amber-100 dark:hover:border-amber-500 px-5 py-5">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <br />
              <div className="p-1">
                <h2 className="font-bold text-lg underline underline-offset-4 decoration-amber-300">{item.title}</h2>
                <p className="font-black text-xs sm:text-sm mt-4 text-black-400 tracking-wide leading-relaxed">{item.description}</p>
                <button
                  onClick={() => openModal(item)}
                  className="mt-4 bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      {isModalOpen && selectedBlog && (
        <BlogModal
          title={selectedBlog.title}
          description={selectedBlog.description}
          image={selectedBlog.image}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Blog;
