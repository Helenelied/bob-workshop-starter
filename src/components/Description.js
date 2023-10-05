import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
        I en avsideliggende dal, langt unna menneskelig sivilisasjon, bor det et traktortroll ved navn Traktor-Tor.
      </Typography>
      <Typography>Traktor-Tor har en spesiell gave, som gjør at han kan forvandle vanlige traktorer til magiske, produktive landbruksmaskiner. Bønder kommer fra fjern og nær for å søke hjelp fra Traktor-Tor.

    
      </Typography>

      <Typography>Ta kontakt dersom du også trenger hjelp med din traktor.</Typography>

    </Box>
  );
}

export default Description;
