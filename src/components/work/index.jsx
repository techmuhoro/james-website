import { DotIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { experiences } from './data';

export default function WorkExperience() {
    return (
        <div>
            <h1 className="mb-2 text-base capitalize">Work Experince</h1>
            <div className="space-y-4">
                {experiences.map(item => (
                    <WotkItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

function WotkItem({ item }) {
    const skills = ['Next', 'Tailwindcss', 'Shadcn', 'PHP'];
    return (
        <div className="flex items-start">
            <p className="text-muted-foreground w-[30%] space-x-2">
                <span>{item?.startDate}</span>
                <span>-</span>
                <span>{item?.endDate}</span>
            </p>

            <div className="w-[70%] space-y-2">
                <h1>
                    <Link
                        href={item?.companyLink}
                        target="_blank"
                        className="flex items-center gap-x-1 underline"
                    >
                        <span>
                            {item?.title} - {item?.company}
                        </span>
                        <ExternalLinkIcon size={16} />
                    </Link>
                </h1>
                <p className="text-muted-foreground">{item.description}</p>

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
