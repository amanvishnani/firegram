import useCollection from "./useCollection";
import { useState } from "react";

export default function useCollectionAdd(collectionName) {
    let { collectionRef } = useCollection(collectionName)
    const [loading, setLoading] = useState(false);

    let addToCollection = async function (...args) {
        setLoading(true);
        await collectionRef.add(...args)
        setLoading(false);
    }

    return { save: addToCollection, loading };
}