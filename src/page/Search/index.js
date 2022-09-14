import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Search from "./Search";

const SearchPage = ()=>{
    const [searchParams, setSearchParams] = useSearchParams()
    return (<>
        <Navbar setSearchParams={setSearchParams}/>
        <Search searchParams={searchParams} />
        <Footer/>
    </>)
}
export default SearchPage