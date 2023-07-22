import { useEffect, useState } from "react";
import { Avatar } from "@mui/joy";
import Chip from "@mui/material/Chip";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setSearchInput(e.currentTarget.value);
        if (value) {
            setSearchParams({ "name": value });
        } else {
            setSearchParams({});
        }
    }

    useEffect(() => {
        const name = searchParams.get("name");
        if (name) {
            setSearchInput(name);
        }
    }, [searchParams]);

    return (
        <div className='header-container'>
            <div className="left-side">
                <Link to={`/`} style={{ color: 'black' }}>
                    <HomeOutlinedIcon fontSize="large" />
                </Link>

                <Chip
                    color="success"
                    label="Online"
                    avatar={<Avatar src={"/images/avatar1.png"} />}
                />
            </div>

            <div className="right-side">
                <div className='search-container'>
                    {
                        location && location.pathname === "/contacts" ? (
                            <input
                                type='text'
                                placeholder='Search contact'
                                onChange={handleSearch}
                                value={searchInput}
                            />
                        ) : (<div />)
                    }
                </div>
                <SettingsOutlinedIcon />
            </div>

        </div>
    );
}

export default Header;