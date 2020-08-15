import { useState, useEffect } from "react";
import { projectFirestore } from "./config";

export default function useCollection(collectionName, options = {subscribe: false}) {
    const [collectionRef, setCollectionRef] = useState(null);
    
    useEffect(() => {
        if(collectionRef == null) {
            let ref = projectFirestore.collection(collectionName);
            setCollectionRef(ref);
        }
    }, [collectionRef, collectionName]);

    return { collectionRef }
}