import React, { useState, useContext } from "react";
import { SearchIcon, Button } from "../../atoms";
import "./SearchBlog.scss";
import { SearchBlogContext } from "/src/context/SearchBlogContext";

function SearchBlog() {
  const { searchInput, searchInputHandler } = useContext(SearchBlogContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={onSubmitHandler}>
      <input
        className="search-form__input"
        placeholder="Search article, news or recipe..."
        value={searchInput}
        onChange={searchInputHandler}
      />
      <div className="search-form__button-container">
        <Button className={"search-form__button--1"}>Search</Button>
        <button className="search-form__button--2">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBlog;
