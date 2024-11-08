import React from 'react';
import { Theme, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => (
    <Theme>
        <TextField.Root placeholder="Search the docs…">
        	<TextField.Slot>
        		<MagnifyingGlassIcon height="16" width="16" />
        	</TextField.Slot>
        </TextField.Root>
    </Theme>
);

export default SearchBar;