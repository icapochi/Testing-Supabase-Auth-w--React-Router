import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";



export default function Home(props){
    
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getUser().then((value) => {
            if (value.data?.user){
                console.log(value.data.user)
                setUser(value.data.user)
            }
        })
    }, [])   

    const signOut = async function(){
        
        const { error } = await supabase.auth.signOut()
        navigate('/')
    }
    return(
        <VStack>
            <Box>
                <Text fontSize='3xl'>{user.email}</Text>
                <Button onClick={signOut}>Sign Out</Button>
            </Box>
        </VStack>
    )
}