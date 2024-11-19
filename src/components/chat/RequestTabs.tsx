import React from "react";
// import { ScrollArea, Tabs, Flex, Avatar} from "@radix-ui/themes";
import { NotionLogoIcon, FramerLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Tabs, TabList, Tab } from "@mui/joy";
import { tabClasses } from "@mui/joy";

interface RequestTabsProps {
    requestList: number[];
    orientation: "vertical" | "horizontal";

}

const RequestTabs = (props: RequestTabsProps) => {

    const tabListStyle = props.orientation === 'vertical' ? 
            { 
                overflowY: 'auto',
                p: 0.5,
                gap: 0.5,
                borderRadius: 'xl',
                scrollSnapType: 'y mandatory',
                '&::-webkit-scrollbar': {xs: {display: 'none'}, sm: {display: 'block'}},
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: 'sm',
                    bgcolor: 'background.surface',
                },
            }
        :
            { 
                overflowX: 'auto',
                p: 0.5,
                gap: 0.5,
                borderRadius: 'xl',
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': {xs: {display: 'none'}, sm: {display: 'block'}},
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                  boxShadow: 'sm',
                  bgcolor: 'background.surface',
                },
            }


    return (
        <Tabs aria-label="Scrollable tabs" defaultValue={0} 
                variant="outlined"
                size="lg"
                sx={ props.orientation === "vertical" ?
                        { height: 400, bgcolor: 'transparent'}
                    :
                        { width: 400, bgcolor: 'transparent'}
                    }  
                orientation={props.orientation}>
            <TabList 
                disableUnderline
                sx={tabListStyle}
            >   
                {
                    [...Array(20)].map((_, idx) => (
                        <Tab key={idx} disableIndicator sx={{ flex: 'none', scrollSnapAligh: 'start'}}>
                            {[<NotionLogoIcon />, <FramerLogoIcon />, <LinkedInLogoIcon />].at(Math.floor(Math.random()*3))}
                        </Tab>
                    ))
                }
            </TabList>
        </Tabs>
    )
}


/*
const RequestTabs = () => {

    return (
        <ScrollArea style={{ height: 200 }} scrollbars="vertical">
            <Flex direction="row" gap="0" pb="2">
                <Tabs.Root defaultValue="0">
                    <Tabs.List size="2">
                        {
                            [...Array(20)].map((_, idx) => (
                                <Tabs.Trigger value={idx.toString()}>
                                    <Avatar size="4"
                                         fallback={
                                            [<NotionLogoIcon />, <FramerLogoIcon />, <LinkedInLogoIcon />].at(Math.floor(Math.random()*3)) ?? <LinkedInLogoIcon/>
                                        }
                                    />
                                </Tabs.Trigger>
                            ))
                        }
                    </Tabs.List>
                </Tabs.Root>
            </Flex>
        </ScrollArea>
    )
}
*/

export default RequestTabs;