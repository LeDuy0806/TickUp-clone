'use client';
import { Button } from '@/shared/components/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const HomeLoginButton: React.FC = (props) => {
    const router = useRouter();
    const navigateToLogin = () => {
        router.push('/login');
    };

    return (
        <Button variant={'destructive'} onClick={navigateToLogin}>
            Go to login page
        </Button>
    );
};

export default HomeLoginButton;
