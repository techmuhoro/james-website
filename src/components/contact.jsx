import Link from 'next/link';
import {
    GithubIcon,
    ExternalLinkIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon,
} from 'lucide-react';

export default function Contact() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="mb-2">Links</h1>
                <div className="flex">
                    <p className="w-[30%] text-muted-foreground flex gap-x-1 items-center">
                        <GithubIcon size={16} />
                        <span>Github</span>
                    </p>
                    <Link
                        href="/"
                        className="w-[70%] flex items-center gap-x-1 hover:underline"
                        target="_blank"
                    >
                        <span> @techmuhoro</span>

                        <ExternalLinkIcon size={16} />
                    </Link>
                </div>

                <div className="flex">
                    <p className="w-[30%] text-muted-foreground flex gap-x-1 items-center">
                        <LinkedinIcon size={16} />
                        <span>Linkedin</span>
                    </p>
                    <Link
                        href="/"
                        className="w-[70%] flex items-center gap-x-1 hover:underline"
                        target="_blank"
                    >
                        <span>james-muhoro</span>

                        <ExternalLinkIcon size={16} />
                    </Link>
                </div>

                <div className="flex">
                    <p className="w-[30%] text-muted-foreground flex gap-x-1 items-center">
                        <TwitterIcon size={16} />
                        <span>Twitter</span>
                    </p>
                    <Link
                        href="https://twitter.com/ice_coder"
                        className="w-[70%] flex items-center gap-x-1 hover:underline"
                        target="_blank"
                    >
                        <span>@ice_coder</span>

                        <ExternalLinkIcon size={16} />
                    </Link>
                </div>

                <div className="flex">
                    <p className="w-[30%] text-muted-foreground flex gap-x-1 items-center">
                        <MailIcon size={16} />
                        <span>Email</span>
                    </p>
                    <Link
                        href="mailto:muhorojames7@gmail.com"
                        className="w-[70%] flex items-center gap-x-1 hover:underline"
                        target="_blank"
                    >
                        <span>muhorojames7@gmail.com</span>

                        <ExternalLinkIcon size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
