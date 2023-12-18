import React, { useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();
  const handleClick = async () => {
    if (!session?.accessToken) {
      console.error('No access token available');
      return;
    }

    try {
        const response = await axios.post('http://127.0.0.1:5000/upload_videos', {
            token: session.accessToken, 
            url: "https://outplayed.tv/media/8lMM2x",
            title: "[Pearl][Mariya] Professional Skye Player",
            description:"Great skype player, very good at using her abilities to get kills and win rounds."
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          });

      console.log(response.data);
    } catch (error) {
      console.error('Error in POST request:', error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Send API Request</button>
      Dashboard
    </>
  );
}
