import React from 'react';

interface BlogModalProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ title, description, image, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden border-4 border-amber-300 hover:border-amber-100 dark:hover:border-amber-500 px-5 py-5 p-4 w-11/12 max-w-lg relative z-[10000]">
        <button
          onClick={onClose}
          className="text-white-500 hover:text-red-700 absolute top-4 right-4 font-bold text-lg"
        >
          X
        </button>
        <br /><br />
        <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
        <h2 className="text-2xl font-bold mb-2 underline underline-offset-4 decoration-amber-300">{title}</h2>
        <p className="font-black text-xs sm:text-sm mt-6 text-black-400 tracking-wide leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BlogModal;
