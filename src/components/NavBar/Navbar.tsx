import { Avatar, Box, IconButton, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // py: 2,
        // px: { xs: 1, sm: 2, md: 3 },
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <IconButton size="small" sx={{ color: "#fff", fontSize:{xs:'8px',sm:'9px'} }}>Back</IconButton>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            sx={{ color: "#fff" }}
          >
            Media Management
          </Typography>
          <IconButton size="small" sx={{ color: "#fff", fontSize:{xs:'8px',sm:'9px'}}}>Edit</IconButton>
        </Box>

        <Typography
          fontSize={{ xs: 10, sm: 12 }}
          sx={{ color: "#ddd", mt: 0.5, ml: { xs: 2, sm: 5 } ,display:{xs:'none',sm:'inline-block'} }}

        >
          Draft Campaign
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexShrink: 0,
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <IconButton size="small" sx={{ color: "#fff", fontSize: "11px" ,display:{xs:'none',sm:'inline-block'}}}>
            Jane Cooper
          </IconButton>

          <Typography
            fontSize={{ xs: 9, sm: 10 }}
            sx={{ color: "purple", textDecoration: "underline", display:{xs:'none',sm:'inline-block'} }}
          >
            Change Profile Pic
          </Typography>
        </Box>

        <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
      </Box>
    </Box>
  );
}

export default Navbar;
