"use client";

import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [inference, setInference] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Show preview of the selected image
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  const onFileUpload = async () => {
    if (!file) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setInference(response.data.response);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-lime-400 via-lime-300 to-lime-100">
      <h1 className="mb-4 text-4xl font-bold">Plant Disease Prediction</h1>
      
      {/* Show preview of the selected image */}
      {imageUrl && (
        <div className="mb-6">
          <img src={imageUrl} alt="Selected" className="max-w-md border border-black rounded-md" />
        </div>
      )}

      <input
        type="file"
        onChange={onFileChange}
        className="mb-6 p-4 border border-black rounded-md"
      />
      <button
        onClick={onFileUpload}
        className="px-7 py-3 text-white bg-green-500 hover:bg-green-400 rounded-xl text-lg"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Upload Image"}
      </button>{" "}
      {inference && (
        <div className="text-lg w-4/5 pt-10">
          <ReactMarkdown>{inference}</ReactMarkdown>
        </div>
      )}
      <div className="py-4">
        <Link href="feedback">
          <button className="px-7 py-3 text-white bg-green-500 hover:bg-green-400 rounded-xl text-lg">
            Continue 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageUpload;
