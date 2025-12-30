import { motion } from "framer-motion";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-10 w-[380px] text-center"
      >
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl blur-2xl bg-accent/40 -z-10" />

        {/* Circle + Tick */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg">
          <svg
            className="w-10 h-10 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold mb-2">
          Payment complete
        </h1>

        <p className="text-sm text-lightGray/70">
          You’re all set. Thanks for supporting Essentinel.
        </p>
      </motion.div>
    </div>
  );
}
