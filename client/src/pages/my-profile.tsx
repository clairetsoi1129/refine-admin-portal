import {useGetIdentity, useOne} from "@refinedev/core"; 

import {Profile} from 'components';

const MyProfile = () => {
  const {data: user} = useGetIdentity<{
    userid: string;
  }>();

  const {data, isLoading, isError} = useOne({
    id: user?.userid,
    resource: 'users'
  });

  const myProfile = data?.data as {
    name: string;
    email: string;
    avatar: string;
    allProperties: any;
  } ??[];

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error...</div>

  return (
    <Profile 
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}

    />
  )
}

export default MyProfile;