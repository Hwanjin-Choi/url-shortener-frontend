import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Link,
} from "@mui/material";

const YourTableComponent = ({ data }) => {
  const formattedDate = new Date(data.createdDate).toLocaleString();
  return (
    <div>
      <h5 style={{ textAlign: "center" }}>
        {data.isCreatedPrevious
          ? "Given URL has been created previously, please use the link below"
          : "URL shorten has been successfully done"}
      </h5>

      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div></div>
        <TableContainer style={{ width: "80%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Original Url</TableCell>
                <TableCell align="left">Converted Url</TableCell>
                <TableCell align="left">Created Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && (
                <TableRow key={data.id}>
                  <TableCell style={{ whiteSpace: "normal" }}>
                    {data.originalUrl}
                  </TableCell>

                  <TableCell style={{ whiteSpace: "normal" }}>
                    <Link
                      href={data.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`http://localhost:3000/` + data.shortUrl}
                    </Link>
                  </TableCell>
                  <TableCell>{formattedDate}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default YourTableComponent;
