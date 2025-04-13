import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import VoiceDemos from '@/app/components/VoiceDemos';
import About from '@/app/components/About'; // ✅ Don't forget this!
import Contact from '@/app/components/Contact'; // ✅ Don't forget this!

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return (
    <main>
      <Header locale={locale} />
      <Hero locale={locale} />
      <VoiceDemos locale={locale} />
      <About locale={locale} /> 
      <Contact locale={locale} /> 
    </main>
  );
}
