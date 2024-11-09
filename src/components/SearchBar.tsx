import React from 'react';
import { Theme, TextField, Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => (
    <Theme>
      <Box width={{ initial: "300px", md: "520px"}}>    
        <TextField.Root size="3" placeholder="요청 검색하기">
        	<TextField.Slot>
        		<MagnifyingGlassIcon height="20" width="20" />
        	</TextField.Slot>
        </TextField.Root>
        </Box>
    </Theme>
);

export default SearchBar;