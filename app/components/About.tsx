'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="About"
      className="w-full bg-black text-white border-b-[5px] border-white px-6 md:px-12 py-16"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Container */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* "ABOUT" slides from left */}
          <h2
            className={clsx(
              'text-3xl uppercase font-light tracking-widest transition-all duration-700',
              animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            About
          </h2>

          {/* Image fades in */}
          <div
            className={clsx(
              'relative mt-2 w-full flex justify-center md:justify-start transition-opacity duration-1000 delay-200',
              animate ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src="/images/voiceover-actor-ernest-slach-about.webp"
              alt="Voiceover actor Ernest Slach"
              width={350}
              height={500}
              className="object-contain w-[250px] md:w-[300px] lg:w-[350px]"
            />
          </div>

          {/* "ERNEST" slides from bottom */}
          <h1
            className={clsx(
              'text-6xl md:text-8xl font-bold uppercase mt-4 text-center md:text-left transition-all duration-700 delay-300',
              animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            Ernest
          </h1>
        </div>

        {/* Right Container */}
        <div className="w-full md:w-1/2 text-base leading-relaxed text-center md:text-justify space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare, tortor ut
            feugiat gravida, justo lorem efficitur diam, a eleifend risus turpis et nisi. Curabitur
            sagittis, lectus sit amet scelerisque mattis, magna enim vulputate velit, at lobortis
            nulla quam a est. Integer venenatis lacus non ante luctus, sed luctus mauris fringilla.
            Sed tincidunt tincidunt mi, nec vehicula ante malesuada sed. Morbi sed pulvinar enim,
            sed efficitur lorem. Suspendisse sit amet purus lectus. Pellentesque et massa ut diam
            pretium cursus sed vitae libero.
          </p>
          <p>
            Donec luctus felis nec justo egestas convallis. Praesent vehicula dui sed magna
            posuere, vitae rhoncus odio tristique. Vivamus faucibus, libero nec laoreet gravida,
            purus arcu facilisis est, ut semper ante nulla vel lorem. Sed in nunc lacinia, rhoncus
            velit ut, congue augue. Ut in laoreet sapien. Maecenas tincidunt, enim a efficitur
            scelerisque, magna lorem ultricies diam, sit amet feugiat lorem lorem et mauris. Sed
            fermentum ex ac magna pulvinar dapibus.
          </p>
          <p>
            Mauris posuere lacus non risus feugiat feugiat. Nam ultricies est a felis sagittis, ac
            dapibus libero porta. Vivamus placerat vehicula lorem, nec fermentum augue efficitur
            non. Aenean a felis porttitor, laoreet sem nec, tempus nunc. Morbi aliquam diam eu eros
            scelerisque, sed iaculis nulla vehicula. Integer nec dictum turpis, ut porttitor augue.
            Nulla facilisi. Etiam ut dictum justo. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
}
