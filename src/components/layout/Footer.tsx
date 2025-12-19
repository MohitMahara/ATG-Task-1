import { Twitter, Linkedin, Discord } from "@deemlol/next-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>

      {/* MAIN FOOTER */}
      <footer className="bg-[#18181c] text-gray-400 layout-padding">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <Link href={"/"} className="w-10 h-10 rounded-full">
                <img
                  src="/Ellipse_center.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            <p className="text-[18px] leading-relaxed text-[#9E9E9E]">
              A good design is not only aesthetically pleasing,
              but also functional. It should be able to solve the problem.
            </p>
          </div>

          {/* RIGHT */}
         <div>
  <h4 className="text-white font-semibold mb-4">Sections</h4>

  <div className="flex flex-wrap gap-12">
    {/* Column 1 */}
    <ul className="space-y-2 text-sm leading-8">
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Section One</Link></li>
      <li><Link href="#">Section Two</Link></li>
      <li><Link href="#">Section Three</Link></li>
    </ul>

    {/* Column 2 */}
    <ul className="space-y-2 text-sm leading-8">
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Section One</Link></li>
      <li><Link href="#">Section Two</Link></li>
      <li><Link href="#">Section Three</Link></li>
    </ul>

    {/* Column 3 */}
    <ul className="space-y-2 text-sm leading-8">
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Section One</Link></li>
      <li><Link href="#">Section Two</Link></li>
      <li><Link href="#">Section Three</Link></li>
    </ul>
  </div>
</div>
          
        </div>
      </footer>

      {/* FULL-WIDTH COPYRIGHT BAR */}
      <div className="w-full bg-black layout-padding">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

          <p>All Rights Reserved Inkyy.com 2022</p>

          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <Twitter size={20} color="#fff" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <Linkedin size={20} color="#fff" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <Discord size={20} color="#fff" />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Footer;
