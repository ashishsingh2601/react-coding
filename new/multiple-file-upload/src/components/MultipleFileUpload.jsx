// // import React, { useState } from "react";

// // const FileUpload = () => {
// //   const [files, setFiles] = useState([]);
// //   const [progress, setProgress] = useState({});
// //   const [uploading, setUploading] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const handleFileChange = (e) => {
// //     const selectedFiles = Array.from(e.target.files);
// //     setFiles(selectedFiles);
// //   };

// //   const handleUpload = async () => {
// //     if (files.length === 0) {
// //       setErrorMessage("Please select files to upload.");
// //       return;
// //     }

// //     setUploading(true);
// //     setSuccessMessage("");
// //     setErrorMessage("");

// //     const promises = files.map(async (file) => {
// //       const formData = new FormData();
// //       formData.append("file", file);

// //       try {
// //         const response = await fetch("YOUR_UPLOAD_ENDPOINT", {
// //           method: "POST",
// //           body: formData,
// //           onUploadProgress: (progressEvent) => {
// //             const progressPercent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
// //             setProgress((prevProgress) => ({
// //               ...prevProgress,
// //               [file.name]: progressPercent,
// //             }));
// //           },
// //         });

// //         if (response.ok) {
// //           setSuccessMessage(`${file.name} uploaded successfully.`);
// //         } else {
// //           setErrorMessage(`Failed to upload ${file.name}.`);
// //         }
// //       } catch (error) {
// //         console.error("Error uploading file:", error);
// //         setErrorMessage(`Error uploading ${file.name}.`);
// //       }
// //     });

// //     await Promise.all(promises);
// //     setUploading(false);
// //   };

// //   return (
// //     <div>
// //       <input type="file" multiple onChange={handleFileChange} />
// //       <button onClick={handleUpload} disabled={uploading}>
// //         Upload
// //       </button>
// //       {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
// //       {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
// //       {files.map((file, index) => (
// //         <div key={index}>
// //           <p>{file.name}</p>
// //           {progress[file.name] !== undefined && (
// //             <progress value={progress[file.name]} max="100" />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default FileUpload;

// import React, { useState } from "react";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [progress, setProgress] = useState({});
//   const [uploading, setUploading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//   };

//   const handleUpload = async () => {
//     if (files.length === 0) {
//       setErrorMessage("Please select files to upload.");
//       return;
//     }

//     setUploading(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     // Simulate file upload progress
//     const promises = files.map(async (file) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         localStorage.setItem(file.name, reader.result);
//         setSuccessMessage(`${file.name} uploaded successfully.`);
//       };
//       reader.onerror = () => {
//         setErrorMessage(`Failed to upload ${file.name}.`);
//       };
//     });

//     await Promise.all(promises);
//     setUploading(false);
//   };

//   const clearLocalStorage = () => {
//     localStorage.clear();
//     setFiles([]);
//     setProgress({});
//     setSuccessMessage("");
//     setErrorMessage("");
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={uploading}>
//         Upload
//       </button>
//       <button onClick={clearLocalStorage}>Clear Files</button>
//       {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
//       {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
//       {files.map((file, index) => (
//         <div key={index}>
//           <p>{file.name}</p>
//           {uploading && <progress value={progress[file.name]} max="100" />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FileUpload;



import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setErrorMessage("Please select files to upload.");
      return;
    }

    setUploading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Reset progress for all files
    setProgress({});

    const promises = files.map(async (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        localStorage.setItem(file.name, reader.result);
        setSuccessMessage(`${file.name} uploaded successfully.`);
      };

      reader.onerror = () => {
        setErrorMessage(`Failed to upload ${file.name}.`);
      };

      reader.onprogress = (event) => {
        const progressPercent = Math.round((event.loaded / event.total) * 100);
        setProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: progressPercent,
        }));
      };
    });

    await Promise.all(promises);
    setUploading(false);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setFiles([]);
    setProgress({}); // Clear progress when clearing local storage
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        Upload
      </button>
      <button onClick={clearLocalStorage}>Clear Files</button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {files.map((file, index) => (
        <div key={index}>
          <p>{file.name}</p>
          <progress value={progress[file.name] || 0} max="100" />
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
