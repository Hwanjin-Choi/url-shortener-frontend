import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOriginalUrlByShortUrl } from "../configurations/urlApi";
import { CircularProgress, Typography } from "@mui/material";

import loadingImg from "../assets/loading.jpg";
import notFoundImg from "../assets/not_found.jpg";

const RedirectPage = () => {
  const { shortUrl } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const data = await getOriginalUrlByShortUrl(shortUrl);
        // If the original URL is found, redirect the current page
        if (data.response.originalUrl.includes("https://")) {
          // If the originalUrl contains "https://", directly assign it to window.location.href
          window.location.href = data.response.originalUrl;
        } else {
          // If it doesn't contain "https://", prepend it and then assign to window.location.href
          window.location.href = "https://" + data.response.originalUrl;
        }
      } catch (error) {
        // Handle errors
        if (error.response && error.response.status === 404) {
          setError("Short URL not found. Please check the URL and try again.");
        } else {
          console.error("Error fetching original URL:", error);
        }
      } finally {
        // Set loading to false after the request is completed
        setLoading(false);
      }
    };

    fetchOriginalUrl();
  }, [shortUrl]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          Loading...
        </Typography>
      </div>
    );
  }

  if (error) {
    // Show error message if there's an error
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src={notFoundImg} alt="Not Found" style={{ height: "70vh" }} />
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  // Render a message after fetching the original URL
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={loadingImg} alt="Loading..." style={{ height: "70vh" }} />
      <Typography variant="body2">Redirecting To Original Page...</Typography>
    </div>
  );
};

export default RedirectPage;
