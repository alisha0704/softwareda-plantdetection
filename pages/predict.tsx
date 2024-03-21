'use client'

import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [inference, setInference] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const onFileUpload = async () => {
        if (!file) return; 
        setIsLoading(true)

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
        } finally{
            setIsLoading(false)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-12 text-3xl font-bold">Plant Disease Prediction</h1>
            <input type="file" onChange={onFileChange} className="mb-4 p-2 border border-gray-300 rounded-md" />
            <button onClick={onFileUpload} className="mb-8 px-4 py-2 text-white bg-green-500 rounded-md" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Upload'}
            </button>            {inference && <div className="max-w-md p-4 bg-white rounded-md shadow-md">
                <ReactMarkdown>{inference}</ReactMarkdown>
            </div>}
        </div>
    );
};

export default ImageUpload;