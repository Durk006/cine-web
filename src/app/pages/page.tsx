"use client"
import connect from '@gandalf-network/connect';
import React, { useEffect, useState } from 'react'

function page() {
    const [dataKey, setDataKey] = useState<string | null>(null);

    useEffect(() => {
        const currentUrl = window.location.href;
        const key = connect.getDataKeyFromURL(currentUrl);
        setDataKey(key);
    }, []);
  return (
    <div>
        You are connected.
        <p>data key: {dataKey}</p>
      
    </div>
  )
}

export default page;
