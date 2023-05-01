import {useOne} from "@refinedev/core"; 

import {Profile} from 'components';
import { useParams } from "react-router-dom";

const AgentProfile = () => {
  const {id} = useParams();

  const {data, isLoading, isError} = useOne({
    id: id as string,
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
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}

    />
  )
}

export default AgentProfile;