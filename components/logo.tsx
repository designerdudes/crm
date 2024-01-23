import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

const LogoComponent: React.FC<LogoProps> = ({ className, width, height }) => {
    return (
        <div className={`logo`}>
            <Image
                src="/assets/logo/logo.svg"
                alt="APlus Laundry Logo"
                width={width}
                className={cn('', className)}
                height={height}
            />
        </div>
    );
};

export default LogoComponent;
