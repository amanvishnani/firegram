import { useState } from "react";
import { projectStorage } from "./config";

function useStorage() {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false)

    function saveFile(file, fileName) {
        if(file === null) return;
        fileName = fileName || file.name;
        let filePath = `media/${fileName}`
        let p = new Promise(function executor(resolve, reject) {
            const storageRef = projectStorage.ref(filePath)
            setLoading(true)
            storageRef.put(file).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage)
            }, (err) => {
                setError(err)
                setLoading(false)
                reject(err)
            }, async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url) 
                setError("")
                setLoading(false)
                resolve(url)
            })
        })
        return p;
    }

    return {
        progress, url, error, loading, saveFile
    }
}

export default useStorage;