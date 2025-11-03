import { motion } from "framer-motion";

const AbstractHeroAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Floating organic shapes */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: "linear-gradient(135deg, #C4E0D9 0%, #E8A298 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-25"
        style={{
          background: "linear-gradient(225deg, #E8A298 0%, #C4E0D9 100%)",
          filter: "blur(30px)",
          left: "20%",
          top: "30%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-56 h-56 rounded-full opacity-15"
        style={{
          background:
            "linear-gradient(45deg, #C4E0D9 0%, rgba(196, 224, 217, 0.5) 100%)",
          filter: "blur(50px)",
          right: "15%",
          bottom: "20%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric circles */}
      <motion.div
        className="absolute border-2 border-brand-primary/20 rounded-full"
        style={{
          width: "300px",
          height: "300px",
          top: "50%",
          left: "50%",
          marginLeft: "-150px",
          marginTop: "-150px",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute border-2 border-brand-accent/20 rounded-full"
        style={{
          width: "200px",
          height: "200px",
          top: "50%",
          left: "50%",
          marginLeft: "-100px",
          marginTop: "-100px",
        }}
        animate={{
          rotate: -360,
          scale: [1, 0.95, 1],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Decorative lines */}
      <motion.div
        className="absolute bg-brand-primary/10"
        style={{
          width: "2px",
          height: "120px",
          top: "20%",
          right: "30%",
        }}
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bg-brand-accent/10"
        style={{
          width: "100px",
          height: "2px",
          bottom: "30%",
          left: "25%",
        }}
        animate={{
          scaleX: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-brand-primary/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default AbstractHeroAnimation;
