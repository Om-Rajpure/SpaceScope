import { motion } from 'framer-motion';

interface AnimatedSunProps {
  intensity: 'low' | 'medium' | 'high' | 'extreme';
}

const AnimatedSun = ({ intensity }: AnimatedSunProps) => {
  const getIntensityConfig = () => {
    switch (intensity) {
      case 'low':
        return {
          color: 'hsl(var(--star-yellow))',
          pulseScale: 1.05,
          flareCount: 4,
          glowIntensity: 0.3,
        };
      case 'medium':
        return {
          color: 'hsl(var(--solar-orange))',
          pulseScale: 1.1,
          flareCount: 6,
          glowIntensity: 0.5,
        };
      case 'high':
        return {
          color: 'hsl(var(--solar-orange))',
          pulseScale: 1.15,
          flareCount: 8,
          glowIntensity: 0.7,
        };
      case 'extreme':
        return {
          color: 'hsl(0 90% 60%)',
          pulseScale: 1.2,
          flareCount: 12,
          glowIntensity: 0.9,
        };
    }
  };

  const config = getIntensityConfig();

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer glow rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 30}%`,
            height: `${100 + i * 30}%`,
            background: `radial-gradient(circle, ${config.color.replace(')', ` / ${config.glowIntensity / (i + 1)})`)} 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Solar flares */}
      {[...Array(config.flareCount)].map((_, i) => (
        <motion.div
          key={`flare-${i}`}
          className="absolute"
          style={{
            width: '4px',
            height: '20px',
            background: `linear-gradient(to top, ${config.color}, transparent)`,
            transformOrigin: 'center bottom',
            left: '50%',
            bottom: '50%',
            marginLeft: '-2px',
            transform: `rotate(${(360 / config.flareCount) * i}deg)`,
          }}
          animate={{
            height: ['20px', '35px', '20px'],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main sun body */}
      <motion.div
        className="relative w-16 h-16 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            hsl(45 100% 85%) 0%, 
            ${config.color} 40%, 
            ${intensity === 'extreme' ? 'hsl(0 90% 50%)' : 'hsl(30 100% 45%)'} 100%)`,
          boxShadow: `
            0 0 20px ${config.color.replace(')', ` / ${config.glowIntensity})`)},
            0 0 40px ${config.color.replace(')', ` / ${config.glowIntensity * 0.7})`)},
            0 0 60px ${config.color.replace(')', ` / ${config.glowIntensity * 0.5})`)}
          `,
        }}
        animate={{
          scale: [1, config.pulseScale, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Sunspot effect */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-orange-900/50"
          style={{ top: '40%', left: '55%' }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-orange-900/40"
          style={{ top: '25%', left: '35%' }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      {/* Coronal mass ejection particles for high/extreme */}
      {(intensity === 'high' || intensity === 'extreme') && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-solar-orange"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: 1
              }}
              animate={{ 
                x: [0, Math.cos((Math.PI * 2 * i) / 8) * 80],
                y: [0, Math.sin((Math.PI * 2 * i) / 8) * 80],
                opacity: [1, 0],
                scale: [1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AnimatedSun;
