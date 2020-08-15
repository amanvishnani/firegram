import * as nsfwjs from "nsfwjs";
import { useEffect, useState } from "react";


export default function useNsfw(imgElement) {
    const [classes, setClasses] = useState(null);
    const [loading, setLoading] = useState(false)
    const [model, setModel] = useState(null);

    useEffect(() => {
        async function setupModel() {
            var model = await nsfwjs.load()
            setModel(model)
        }
        setupModel()
    }, []) // Comp Did Mount

    useEffect(() => {
        if (!imgElement || !model) {
            return
        }
        async function classifyImage(img) {
            setLoading(true)
            await sleep(100)
            const predictions = await model.classify(img)
            setLoading(false)
            setClasses(predictions)
        }
        classifyImage(imgElement)
    }, [imgElement, model])

    return {
        classes, loading
    }
}

function sleep(timeInMs = 0) {
    let p = new Promise((resolve) => {
        setTimeout(_ => resolve(), timeInMs)
    })
    return p;
}