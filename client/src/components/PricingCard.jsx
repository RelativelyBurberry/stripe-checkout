import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PricingCard() {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);


  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    cardRef.current.style.setProperty("--x", `${x}px`);
  };

   const checkout = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/checkout`, {
    method: "POST",
  });
  const data = await res.json();
  window.location.href = data.url;
};


  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="relative group w-[360px] rounded-3xl"
    >
      {/* ================= IDLE SWEEP ================= */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute top-0 h-full w-[180px] idle-sweep" />
      </div>

      {/* ================= POINTER SWEEP ================= */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute top-0 h-full w-[180px]"
          style={{
            left: "var(--x)",
            transform: "translateX(-50%) skewX(-12deg)",
            background:
              "linear-gradient(to right, transparent, rgba(242,86,35,0.45), transparent)",
          }}
        />
      </div>

      {/* ================= CARD ================= */}
      <div className=" relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-8">
        
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/10 text-lightGray">
          Most popular
        </span>

        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg mb-6">
          <div className="w-6 h-6 rounded-full border-4 border-white" />
        </div>

        <h2 className="text-xl text-white font-semibold mb-2">Starter</h2>

        <p className="text-sm text-lightGray/70 mb-6">
          Clean, distraction-free news. Focus on what matters.
        </p>

        <div className="mb-6">
          <span className="text-5xl font-semibold">$0</span>
            <span className="text-3xl align-center">.99</span>

        </div>

        <motion.button
          type="button"
          whileHover={{ boxShadow: "0 0 40px rgba(242,86,35,0.6)" }}
          whileTap={{ scale: 0.96 }}
          className="w-full rounded-xl bg-gradient-to-r from-accent to-orange-400 py-3 text-black font-semibold shadow-lg"
          onClick={checkout}
        >
          Choose this plan
        </motion.button>
        <p className="mt-2 text-xs text-white/40 text-center">
  Cancel anytime · No ads · No clutter
</p>


        <ul className="mt-6 space-y-3 text-sm text-lightGray/80">
          <li>✔ Duplicate-free stories</li>
          <li>✔ Single-topic focus</li>
          <li>✔ Clear organization</li>
        </ul>
        
      </div>
    </motion.div>
  );
}
