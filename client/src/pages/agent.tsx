import {useList, useTable} from '@refinedev/core';
import { Typography, Box, Stack, TextField, Select, MenuItem } from '@mui/material';

import {AgentCard} from 'components';

const Agent = () => {
  const {data, isLoading, isError} = useList({});

  const allAgents = data?.data;

  return (
    <div>agent</div>
  )
}

export default Agent;