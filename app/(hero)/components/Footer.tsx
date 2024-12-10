import Image from "next/image";
import asw from "../../../components/assets/asw.png";

function Footer() {
  return (
    <footer className="text-center py-8">
      <div className="flex justify-center mb-4">
        {/* Image Section */}
        <Image
          src={asw.src}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <p className="text-sm">
        © 2024 Satsatsatrio. All rights reserved.
      </p>
      <p className="text-sm">
        Created by{" "}
        <a
          href="#"
          className="underline underline-offset-4 decoration-amber-300 hover:underline"
        >
          Aulia Satrio Wijoyo
        </a>
      </p>
    </footer>
  );
}

export default Footer;
