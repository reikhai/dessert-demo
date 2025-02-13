import React, { useState, MouseEvent } from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import Flag from 'react-country-flag';

const LanguageDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("us");

  const { i18n } = useTranslation(); // `t` is for translation, `i18n` for switching languages

  const handleSelectLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Store selected language in localStorage
    setSelectedLanguage(lng == 'en' ? 'us' : lng);
    handleClose();
  };

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const languages: Array<{ label?: string; value?: string }> = [
    { label: "English", value: "en" },
    { label: "Chinese", value: "cn" },
  ];

  return (
    <>
      <ListItemIcon onClick={handleClick}>
        {/* <LanguageIcon sx={{ color: grey[50] }} /> */}
        <Flag countryCode={selectedLanguage} style={{fontSize: '2rem', color: grey[50], cursor: 'pointer' }} />
      </ListItemIcon>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map(({ label, value }) => (
          <MenuItem key={value} onClick={() => handleSelectLanguage(value)}>
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Menu>

      {/* <div>Selected Language: {selectedLanguage}</div> */}
    </>
  );
};

export default LanguageDropdown;
