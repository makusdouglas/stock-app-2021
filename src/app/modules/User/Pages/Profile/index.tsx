import React from 'react';
import { useParams } from 'react-router';
import ContentBox from '../../../../components/ContentBox';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (<ContentBox cProps={{ minHeight: 400 }}>
    <h1>Perfil - {id}</h1>
  </ContentBox>);
}

export default Profile;