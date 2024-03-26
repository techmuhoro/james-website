'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ExternalLinkIcon,
    Code2Icon,
    ArrowDownIcon,
    ArrowUpIcon,
} from 'lucide-react';
import Image from 'next/image';
import EauctionImage from '@/assets/eauction.png';
import Tickets4uImage from '@/assets/tickets4u.png';
import DashboardImage from '@/assets/dashboard.png';

const projects = [
    {
        id: 'flip',
        name: 'Flip',
        shortDescription: 'A Claims Processing system',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio.`,
        cover: DashboardImage,
        live: '/',
        code: '',
    },
    {
        id: 'eaqution',
        name: 'Eaquction',
        shortDescription: 'Online bidding',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio.`,
        cover: Tickets4uImage,
        live: '/',
        code: '',
    },
    {
        id: 'tickets4u',
        name: 'Tickets4U',
        shortDescription: 'Primier Ticketing Application',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio.`,
        cover: EauctionImage,
        live: '/',
        code: '',
    },

    {
        id: 'dashboard-template',
        name: 'Dashboard',
        shortDescription: 'Ready made dashboard template',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio.`,
        cover: Tickets4uImage,
        live: '/',
        code: '',
    },

    {
        id: 'e-com',
        name: 'E commerce',
        shortDescription: 'Fully Fledged ecommerce',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio.`,
        cover: EauctionImage,
        live: '/',
        code: '',
    },
];
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const projectList = showAll ? projects : projects.slice(0, 3);

    return (
        <div>
            <h1>Projects</h1>
            <div className="space-y-5">
                {projectList.map(project => (
                    <Project key={project.id} item={project} />
                ))}
            </div>

            <div className="">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-x-1 mx-auto hover:underline"
                >
                    <span>Load {showAll ? 'less' : 'more'} projects</span>
                    {showAll ? (
                        <ArrowUpIcon size={16} />
                    ) : (
                        <ArrowDownIcon size={16} />
                    )}
                </button>
            </div>
        </div>
    );
}

function Project({ item }) {
    return (
        <article className="">
            <div className="flex">
                <div className="w-[30%] text-muted-foreground">
                    <p>{item.name}</p>
                </div>
                <div className="w-[70%]">
                    <div className="w-12/12 space-y-1">
                        <Link href="/">
                            <div className="h-40 bg-muted relative">
                                <Image
                                    src={item.cover}
                                    fill
                                    alt="Eauction project cover"
                                />
                            </div>
                        </Link>
                        <p>{item.shortDescription}</p>
                        <p className="text-muted-foreground">
                            {item.description}
                        </p>
                        <div className="flex justify-end items-center gap-x-4">
                            <Link href="/" className="hover:underline">
                                <ExternalLinkIcon />
                            </Link>

                            <Link href="/" className="hover:underline">
                                <Code2Icon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
