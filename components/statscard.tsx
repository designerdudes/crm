"use client"
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Heading from './ui/heading';
import { ArrowBigRightDashIcon, ArrowRight, ArrowRightFromLineIcon, ArrowRightIcon, LucideArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GraphsComponent from './graphs';


interface StatsCardProps {
    title: string;
    stat: number;
    statPrefix?: string;
    icon: React.ReactNode;
    desc?: string;
    clasname?: string;
    href: string;
    data: any
}

const StatsCard: React.FC<StatsCardProps> = ({
    title,
    stat,
    statPrefix = '',
    icon,
    desc,
    clasname,
    href,
    data
}) => {
    const router = useRouter()

    return (
        <Card className='text-left w-full flex flex-col justify-evenly items-stretch relative'>
            <CardHeader>
                <CardTitle className='text-md font-normal'>{title}</CardTitle>
                <Heading title={`${stat}`} className='text-3xl font-extrabold' />
                <p className='opacity-80 text-sm py-1'>+{stat} from last month</p>
                <Button onClick={() => router.push(href)} variant='secondary'>View All <ArrowRight className='w-4 ml-3' /></Button>
            </CardHeader>
            <div className='absolute top-5 right-5'>
                <GraphsComponent data={data} />

            </div>
        </Card>
    );
};

export default StatsCard;
