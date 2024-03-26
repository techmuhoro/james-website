import { DotIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

const experiences = [];
export default function WorkExperience() {
    return (
        <div>
            <h1 className="mb-2 text-base capitalize">Work Experince</h1>
            <div className="space-y-4">
                <WotkItem />
                <WotkItem />
                <WotkItem />
            </div>
        </div>
    );
}

function WotkItem() {
    const skills = ['Next', 'Tailwindcss', 'Shadcn', 'PHP'];
    return (
        <div className="flex items-start">
            <p className="text-muted-foreground w-[30%] space-x-2">
                <span>Oct 2023</span>
                <span>-</span>
                <span>Present</span>
            </p>

            <div className="w-[70%] space-y-2">
                <h1>
                    <Link
                        href="https://www.ipayafrica.com/"
                        className="flex items-center gap-x-1 underline"
                    >
                        <span>Senior Software Developer - Ipay</span>
                        <ExternalLinkIcon size={16} />
                    </Link>
                </h1>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi cumque maxime est? Eos provident consequatur quod
                    soluta sunt, libero aliquid ex eius aliquam sed velit
                    placeat perferendis illum error fugit.
                </p>

                <div className="flex space-x-2 text-muted-foreground/75">
                    {skills.map((skill, index) => (
                        <p key={skill} className=" flex items-center gap-x-1">
                            <span>{skill}</span>
                            {index != skills.length - 1 && (
                                <span>
                                    <DotIcon size={20} />
                                </span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
