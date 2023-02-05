import React from 'react';
import { useState, useEffect } from 'react';
import DATA from '../Data';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
        const res = await axios.get("http://localhost:5000")
        setData(res.data);
       };
       fetchData()
    }, []);

    console.log(query);
    return (
        <>
            <form className="d-flex search" role="search">
                <input className="form-control me-2" type="search" placeholder="Tìm Kiếm..." aria-label="Search" 
                onChange={(e) => setQuery(e.target.value)}/>
                {}
                <button className="btn btn-outline-success" type="submit">
                    <span className="fa fa-search"></span></button>
                {}
            </form>
            
        </>
    );
}

export default Search;
