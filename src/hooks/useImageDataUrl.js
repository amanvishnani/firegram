import { useState, useEffect } from "react";

export default function useImageDataUrl() {
    const [dataUrl, setDataUrl] = useState(null)
    const [file, setFile] = useState(null);

    useEffect(() => {
        if(file == null) {
            setDataUrl(null)
            return
        };
        var reader = new FileReader();
        reader.onload = function(e) {
            setDataUrl(e.target.result)
        }
        reader.readAsDataURL(file)
    }, [file])

    return {
        dataUrl,
        setFile
    }
}