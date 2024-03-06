import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import About from '@/components/about';
import WorkExperience from '@/components/work';
import Contact from '@/components/contact';
import Projects from '@/components/projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`${inter.className} min-h-screen midnight  bg-background  text-background-foreground`}
        >
            <div className="md:max-w-[600px] min-h-screen mx-auto pt-32 space-y-10 ">
                <Header />

                <About />

                <WorkExperience />

                <Projects />

                <Contact />
            </div>
        </main>
    );
}
