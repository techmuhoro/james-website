import { ExternalLinkIcon, DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import JamesImage from '@/assets/james-profile.jpg';

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
                <div className="w-[100px] h-[100px] relative overflow-hidden rounded-full">
                    <Image
                        src={JamesImage}
                        fill
                        alt="profile pic"
                        className="rounded-full"
                    />
                </div>
                <div className="space-y-0.5">
                    <h1 className="font-semibold text-lg">
                        James Muhoro Mucheru
                    </h1>
                    <h4 className="text-muted-foreground">
                        Senior Software Engineer
                    </h4>
                    <Link
                        href="https://www.ipayafrica.com/"
                        className="underline flex gap-x-1 items-center text-muted-foreground"
                        target="_blank"
                    >
                        <span>@Ipay Africa</span>
                        <ExternalLinkIcon size={16} />
                    </Link>
                </div>
            </div>
            <div>
                <Link
                    href="/docs/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-x-1 text-sm hover:underline"
                >
                    <DownloadIcon size={18} />
                    <span>Resume</span>
                </Link>
            </div>
        </header>
    );
}
