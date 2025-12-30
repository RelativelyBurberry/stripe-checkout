import { motion } from "framer-motion";

export default function Cancel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-10 w-[380px] text-center">
        
        {/* Muted circle */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-3xl text-lightGray">✕</span>
        </div>

        <h1 className="text-2xl font-semibold mb-2">
          Payment not completed
        </h1>

        <p className="text-sm text-lightGray/70">
          We’re sorry — the payment didn’t go through.
          <br />
          You can try again anytime.
        </p>

      </div>
    </motion.div>
  );
}
