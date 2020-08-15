const { useState, useEffect } = require("react");
const { default: useCollection } = require("../firebase/useCollection");


export default function useFeed(options = {startAt: 0, limit: 20}) {
    let { collectionRef } = useCollection('media')
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        if(!collectionRef) return;
        let unsubscribe = collectionRef
        .orderBy("createdAt", "desc")
        .limit(options.limit)
        .onSnapshot((snap)=>{
            let feeds = []
            snap.forEach(doc => {
                feeds.push({...doc.data(), id: doc.id});
            });
            setFeed(feeds);
        })
        return () => {
            unsubscribe()
        }
    }, [collectionRef, options.limit])

    return {
        feed
    }
    
}