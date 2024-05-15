import {Box, useTheme} from "@mui/material";

const data = [
  {num: '1,873', text: 'LLM models', timeVisible: 0.3},
  {num: '$326,734', text: 'Paid to data scientists', timeVisible: 0.4},
  {num: '6,557', text: 'Developers', timeVisible: 0.5}
]

const Data = ({ visible }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
        gap: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
        color: '#FFFFFF',
      }}
    >
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              width: { xs: 'auto', sm: '33%', md: '33%', lg: '33%', xl: '33%' },
              borderRadius: 91,
              background: 'linear-gradient(105.65deg, rgba(150, 52, 136, 0.2), rgba(193, 77, 100, 0.2) 20.64%, rgba(252, 111, 50, 0.2) 49.5%, rgba(255, 74, 89, 0.2))',
              p: 4,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(100px)',
              transition: `opacity 0.6s linear, transform ${item.timeVisible}s linear`,
            }}
          >
            <Box sx={{ ...theme.typography.dataDigit }}>{item.num}</Box>
            <Box sx={{ ...theme.typography.dataText }}>{item.text}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Data;