import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createShortUrl } from "../configurations/urlApi";
import Typography from "@mui/material/Typography";
import ShortenUrlData from "../components/ShortenUrlData.js";

const UrlMainPage = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [result, setResult] = useState(null);
  const handleCreateShortUrl = async () => {
    try {
      const result = await createShortUrl(originalUrl);
      console.log("Short URL created:", result);
      setResult(result.shortUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography
        style={{ margin: "10vh 0px", fontWeight: "600" }}
        variant="h2"
        textAlign={"center"}
        gutterBottom
      >
        Shorten your Url
      </Typography>
      <div
        style={{
          width: "100%",
          margin: "10vh 0px",
          padding: "0",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{ display: "flex", width: "80%", justifyContent: "center" }}
        >
          <TextField
            fullWidth
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            label="Enter Your Url"
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={handleCreateShortUrl}
            color="primary"
            style={{ marginLeft: 10 }}
          >
            Convert
          </Button>
        </div>
      </div>
      {result && <ShortenUrlData data={result} />}
    </div>
  );
};

export default UrlMainPage;
