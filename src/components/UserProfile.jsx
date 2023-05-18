import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = (props) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: { Authorization: `Bearer ${props.token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [props.token]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Account Overview</h2>
      <p>Username: {profile.id}</p>
      <p>Email: {profile.email}</p>
      <p>Country: {profile.country}</p>
      <p>Subscription: {profile.product}</p>
    </div>
  );
};

export default UserProfile;
