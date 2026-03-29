import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth follow (lerp)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Core */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-10 h-10">
          {/* Core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-90" />

          {/* Inner sharp dot */}
          <div className="absolute inset-2 rounded-full bg-white opacity-80" />
        </div>
      </div>

      {/* Main Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-72 h-72">
          {/* Soft gradient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

          {/* Secondary subtle glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-400/10 blur-2xl" />
        </div>
      </div>

      {/* Ambient Aura */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(34,211,238,0.2) 40%, transparent 70%)",
            transform: `translate(${pos.current.x - 300}px, ${
              pos.current.y - 300
            }px)`,
          }}
        />
      </div>
    </>
  );
};

export default MouseFollower;