"use client";
import connect from '@gandalf-network/connect';
import {useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
    const [dataKey, setDataKey] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const currentUrl = window.location.href; // Gets the current browser URL
        const key = connect.getDataKeyFromURL(currentUrl);
        setDataKey(key); // Set the dataKey state
  },); // Include router as a dependency


    return (
        <div>
            You are connected.
            datakey:{dataKey}
        </div>
    );
}

export default Page;
