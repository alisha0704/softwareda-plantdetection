import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [inference, setInference] = useState<string>('');

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const onFileUpload = async () => {
        if (!file) return;
    
        const formData = new FormData();
        formData.append('image', file);
    
        try {
            const response = await axios.post(' http://127.0.0.1:5000/analyze', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setInference(response.data.response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload</button>
            {inference && <ReactMarkdown>{inference}</ReactMarkdown>}        </div>
    );
};

export default ImageUpload;