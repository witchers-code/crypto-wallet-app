import React, { ChangeEvent } from "react";
import { Component, JSX } from "solid-js";

type SearchInput = {
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
};

export const SearchInput: Component<SearchInput> = (props) => {
  return (
    <div class="flex relative items-center">
      <input
        type="text"
        id="searchCoin"
        name="searchCoin"
        class="w-full mb-2  rounded py-1.5 px-2 pr-8 bg-max-dark text-sm text-white-font placeholder:text-label-font focus:outline-none focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder="Search coin"
        onInput={props.onInput}
      />
      <img
        class="absolute right-2.5 bottom-[18px]"
        src="/icons/ui/search.svg"
      />
    </div>
  );
};
