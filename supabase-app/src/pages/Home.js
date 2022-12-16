import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";



export default function Home(props){
    
    const [user, setUser] = useState({})
    const [entry, _setEntry] = useState({title: "Some title", desc: "some desc", user_id: user.id})
    const {title, desc, user_id} = entry
    const [entries, setEntries] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getUser().then((value) => {
            if (value.data?.user){
                console.log(value.data.user)
                setUser(value.data.user)
            }
        })
        getEntries()
    }, [])   

    const getEntries = async function(){
        const { data, err } = await supabase.from('entries').select()
        setEntries(data)
    }

    const signOut = async function(){
        
        const { error } = await supabase.auth.signOut()
        navigate('/')
    }

    const makeEntry = async function(){
        _setEntry({...entry, user_id: user.id})
        const { err } = await supabase.from('entries').insert({
            user_id, title, desc
        })
        console.log(err)
        if (err) throw err
    }
    return(
        <VStack>
            <Box>
                <Text fontSize='3xl'>{user.email}</Text>
                <Button onClick={makeEntry}>Make An Entry!</Button>
                <Button onClick={signOut}>Sign Out</Button>
                
                {entries.map(x => (
                    <HStack key={x.id} p='10px'>
                        <Button>{x.title}: <br /> {x.desc}</Button>
                    </HStack>
                    
                ))}
            </Box>
        </VStack>
    )
}