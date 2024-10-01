"use client"
import React, { useEffect, useState } from 'react';
import Connect  from '@gandalf-network/connect';
import { Platform } from '@gandalf-network/connect/components';
import { useAuth } from '@clerk/nextjs';


export default function Gandalf() {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const initializeConnect = async () => {
      // Initialize Connect
      const connect = new Connect({
        publicKey: '0x02015e78df7470d4236cfa05f684c56796886a172e7612db33e2e06258f895ed3d',
        redirectURL: 'http://192.168.1.196:3000/pages',
        platform: Platform.UNIVERSAL,
        services: {
          youtube: {
            activities: ["watch"],
        },
        },
        
      });

      try {
        const connectUrl = await connect.generateURL();
        console.log('Generated Connect URL:', connectUrl);

        const qrCodeUrl = await connect.generateQRCode();
        setQrCodeDataUrl(qrCodeUrl);

        const connectStatus = connect.verificationComplete;
        setStatus(connectStatus);

  
      } catch (error) {
        console.error('Error generating Connect URL or QR Code:', error);
      }
    };

  

    initializeConnect();
  }, []);

  return (
    <div>
      {qrCodeDataUrl ? (
        <div>
           <img src={qrCodeDataUrl} alt="Connect QR Code" />
           Connect by scanning this qr code on your phone
           <br/> 
           status: {status}

        </div>
       
        
      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
  );
};