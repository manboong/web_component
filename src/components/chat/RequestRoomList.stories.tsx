import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { List } from "@mui/material";
import RequestRoom, { RequestRoomProps } from "./RequestRoom";

export default {
    title: "Components/RequestRoom",
    component: RequestRoom,
    argTypes: {
        title: { type: "string" },
        startDate: { type: Date },
        logoImage: { type: "string" },
    },
} as Meta;

const Template: StoryFn<RequestRoomProps> = (args) => <RequestRoom {...args} />;

const reqs = [
    {
        title: "req 1",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
    {
        title: "req 2",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
    {
        title: "req 3",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
];

export const Default = Template.bind({});
Default.args = {
    ...reqs[0],
};

const RequestRoomList: StoryFn<RequestRoomProps> = (args) => {
    return (
        <List style={{ maxWidth: "fit-content", backgroundColor: "#f9f9f9" }}>
            {reqs.map((req, index) => (
                <RequestRoom
                    key={index}
                    title={req.title}
                    image={req.logo_image}
                    onClick={() => console.log(`Clicked on ${req.title}`)}
                />
            ))}
        </List>
    );
};

export const RequestList = RequestRoomList.bind({});
