import { Typography, Box, Stack, TextField, Select, MenuItem } from '@mui/material';
import {useDelete, useGetIdentity, useShow} from "@refinedev/core"; 
import {useParams, useNavigate} from 'react-router-dom';
import {ChatBubble, Delete, Edit, Phone, Place, Star} from '@mui/icons-material'; 

import {CustomButton} from 'components';


const PropertyDetails = () => {
  const navigate = useNavigate();
  const {data: user} = useGetIdentity();
  const {id} = useParams();
  const {mutate} = useDelete();
  const {queryResult} = useShow();
  const {data, isLoading, isError} = queryResult;

  const propertyDetails = data?.data??{};

  const handleDeleteProperty = () => {
    // const response = confirm('Are you sure to delete this property?');
    const response = true;
    if (response){
      mutate({
        resource: 'properties',
        id: id as string,
      },{
        onSuccess: () => {
          navigate('/properties');
        },
      });
    }
  }

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;


  return (
    <Box borderRadius="15px" padding="20px" bgcolor="#fcfcfc" width="fit-content">
      <Typography fontSize={25} fontWeight={700} color="#11142d">Details</Typography>
      <Box mt="20px" display="flex" flexDirection={{xs: 'column', lg: 'row'}} gap={4}>
        <Box flex={1} maxWidth={764}>
          <img src={propertyDetails.photo} alt={propertyDetails.title} height={546} 
            style={{objectFit: "cover", borderRadius: '10px'}} 
            className="property details-img"/>

          <Box mt="15px">
            <Stack direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center">
              <Typography fontSize={18} fontWeight={500} color="#11142d" textTransform="capitalize">{propertyDetails.propertyType}</Typography>
              <Box>
                {[1,2,3,4,5].map((star) => <Star key={`star-${star}`} sx={{color: '#f2c94c'}}/>)}
              </Box>
            </Stack>

            <Stack direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center">
              
              <Box>
                <Typography fontSize={22} fontWeight={600} color="#11142d" textTransform="capitalize">{propertyDetails.title}</Typography>
                <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                  <Place sx={{color: '#808191'}} />
                  <Typography fontSize={14} color="#808191">{propertyDetails.location}</Typography>
                </Stack>
              </Box>

              <Box>
                <Typography fontSize={14} fontWeight={600} color="#11142d" textTransform="capitalize">Price</Typography>
                <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                  <Typography fontSize={22} fontWeight={600} color="#808191">$ {propertyDetails.price}</Typography>
                  <Typography fontSize={12} fontWeight={500} color="#808191">for one day</Typography>
                </Stack>
              </Box>
            </Stack>

            <Box mt="15px">
              <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>

                <Typography fontSize={16} fontWeight={500} color="#11142d" textTransform="capitalize">{propertyDetails.description}</Typography>
              </Stack>
            </Box>

            <Box mt="15px">
              <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>

              <CustomButton title="Edit" handleClick={() => navigate(`/properties/edit/${id}`)} backgroundColor="#475be8" color="#fcfcfc" icon={<Edit/>} />
              <CustomButton title="Delete" handleClick={handleDeleteProperty} backgroundColor="#475be8" color="#fcfcfc" icon={<Delete/>} />
              </Stack>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PropertyDetails;