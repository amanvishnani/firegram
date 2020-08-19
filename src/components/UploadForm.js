import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useStorage from '../firebase/useStorage';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useNsfw from "../hooks/useNsfw";
import useImageDataUrl from '../hooks/useImageDataUrl';
import useCollectionAdd from '../firebase/useCollectionAdd';
import useAuth from "../firebase/auth/useAuth";

let styles = {
    previewImage: {
        maxWidth: 250,
        maxHeight: 250
    },
    addNewFab: {
        margin: 20
    }
}

export default function UploadForm() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [imageTag, setImageTag] = useState(null);
    const [imageSanity, setImageSanity] = useState({
        isValid: true,
        error: "",
        pristine: true
    });

    const { progress, error, loading, saveFile } = useStorage();
    const { dataUrl, setFile: setImageFile } = useImageDataUrl();
    const { classes } = useNsfw(imageTag)
    const { save } = useCollectionAdd('media');
    const { auth } = useAuth();

    const allowedFiles = ['image/png', 'image/jpeg']
    const INVALID_FILE = "Please select an image (png/jpeg)";

    function sanitizeFile(file) {
        setImageFile(file)
    }

    async function uploadFile() {
        let createdAt = Date.now()
        let url = await saveFile(selectedFile, `${createdAt}`)
        let { uid } = auth;
        await save({ url, createdAt, uid });
        cleanUp();
    }

    function cleanUp() {
        setImageSanity({
            isValid: true,
            error: "",
            pristine: true
        });
        setSelectedFile(null)
        setImageFile(null)
    }

    function changeHandler(event) {
        let selected = event.target.files[0]
        if (selected && allowedFiles.includes(selected.type)) {
            setSelectedFile(selected);
            setFileError("")
            sanitizeFile(selected)
        } else {
            setFileError(INVALID_FILE)
        }
        event.target.value = null
    }

    useEffect(() => {
        if (dataUrl == null) return;
        let tag = document.createElement('img')
        tag.setAttribute('src', dataUrl)
        setImageTag(tag)
    }, [dataUrl])

    useEffect(() => {
        if (!classes) return;
        let invalid = ['Porn', 'Hentai'].includes(classes[0].className)
        let err = "";
        if (invalid) {
            err = `Image with ${classes[0].className} is not allowed.`
        }
        setImageSanity({
            isValid: !invalid,
            error: err,
            pristine: false
        });
    }, [classes]);

    function renderForm() {
        return <form>
            <label htmlFor="upload-input">
                <input name="upload-input" id="upload-input" style={{ display: 'none' }} type="file" onChange={changeHandler} />
                <Fab variant="extended" component="span" color="primary" aria-label="add" style={styles.addNewFab}>
                    <AddIcon />
                    Add New
                </Fab>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {fileError && <div className="error">{fileError}</div>}
                {selectedFile && <div>{selectedFile.name}</div>}
                {!imageSanity.pristine && !imageSanity.isValid && <div>{imageSanity.error}</div>}
            </div>
        </form>

    }

    function renderUploadImage(dataUrl) {
        return <>
            <img src={dataUrl} height={250} style={styles.previewImage} alt="Preview" /> <br/>
            <Button onClick={_ => uploadFile()} variant="contained" color="primary">
                Upload
            </Button>
            <span style={{margin: 5}}/>
            <Button variant="contained" color="secondary" onClick={_ => cleanUp()}>
                Cancel
            </Button>
        </>;
    }

    return (
        <>
            <div>
                {loading && <LinearProgress color="secondary" variant="determinate" value={progress} />}
            </div>
            {
                auth && (imageSanity.isValid && !imageSanity.pristine ?
                    renderUploadImage(dataUrl) :
                    renderForm())
            }
        </>
    )
}


