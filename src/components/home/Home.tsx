/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navbar from '../NavBar/Navbar';
import { data } from '../../constants/data';
import { Tooltip, Typography, Select, MenuItem } from '@mui/material';
import Footer from '../Footer/Footer';

function CustomTabPanel({ children, value, index }:any) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: { xs: 220, sm: 280, md: 320 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);
  const [range, setRange] = React.useState(100);
  const [selectValue, setSelectValue] = React.useState('');

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
    setSelectValue('');
  };

  const selectedTab = data[value];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Navbar />

<Box sx={{padding:{xs:0.5,sm:1}}}>
  <Typography variant='h6' fontWeight='bold'>Content Type</Typography>
    <Typography variant='body2' fontWeight='bold'>Choose a content type that best fits your needs.
</Typography>
<hr />
</Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          pb: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            mt: 2,
            minHeight: 40,
            '& .MuiTabs-indicator': { display: 'none' },
          }}
        >
          {data.map((item, index) => (
            <Tab
              key={index}
              label={item.name}
              {...a11yProps(index)}
              sx={{

                borderRadius: 6,
                px: { xs: 1.3, sm: 2.8 },
                py: { xs: 1.5, sm: 1 },
                fontSize: { xs: 6, sm: 8, md: 10 },
                backgroundColor:
                  item.name === selectedTab.name ? '#9B1FE8' : 'transparent',
                border:
                  item.name === selectedTab.name ? 'none' : '1px solid white',
                margin: {xs:'1px',sm:'3px'},
                color: 'white',
                minHeight: 30,
                minWidth : {xs:10,sm:10},
                flexShrink: 0,
              }}
            />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={value}>
        <Typography
          fontSize={{ xs: 12, sm: 14, md: 16 }}
          sx={{ mb: 1, color: '#fff' }}
        >

          Which type of “<b>{selectedTab.name}</b>” content do you want to create?

        </Typography>

        <Select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          displayEmpty
          sx={{
            width: { xs: '100%', sm: 300 },
            height: 40,
            mb: 3,
            color: 'white',
            backgroundColor: '#2F2F2F',
            borderRadius: 4,
            fontSize: { xs: 11, sm: 13 },
          }}
        >
          <MenuItem value="" disabled>
            Search
          </MenuItem>

          {selectedTab.sub.map((item, idx) => (
            <MenuItem key={idx} value={item}>
              {item.replaceAll('_', ' ')}
            </MenuItem>
          ))}
        </Select>

        <Box>
          <Typography
            fontSize={{ xs: 12, sm: 14, md: 16 }}
            sx={{ color: '#fff' }}
          >
            Set the number of words for output text
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              gap: 2,
              width: { xs: '100%', sm: '60%', md: '30%' },
            }}
          >
            <span style={{ fontSize: 12, color: 'white' }}>100</span>

            <Tooltip title={range}>
              <input
                type="range"
                min={100}
                max={1000}
                value={range}
                style={{ width: '100%' }}
                onChange={(e) => setRange(Number(e.target.value))}
              />
            </Tooltip>

            <span style={{ fontSize: 12, color: 'white' }}>1000</span>
          </Box>
        </Box>
      </CustomTabPanel>

      <Footer />
    </Box>
  );
}
