import { useState, useEffect } from "react"

const localCachee = {};

export default function useBreedListSample(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCachee[animal]) {
            setBreedList(localCachee[animal])
        } else {
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setStatus('loading');

            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

            const json = await res.json();
            localCachee[animal] = json.breeds || []
            setBreedList(localCachee[animal]);
            setStatus('loaded')
        }
    }, [animal]);

    return [breedList, status];

}