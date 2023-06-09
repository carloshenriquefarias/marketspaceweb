import { Stack, Box, Text, Link, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { RiDashboardLine, RiContactsLine, } from 'react-icons/ri'

interface NavSectionProps{
    title: string
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps){
    return(
        <Box>
            <Text 
                fontWeight="bold" 
                fontSize="small" 
                color="gray.500"
            >
                {title}
            </Text>
            
            <Stack spacing="4" mt="8" align="stretch"> 
                {children}
            </Stack>
        </Box>
    );
}