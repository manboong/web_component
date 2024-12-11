import React from "react";
import { Theme, Button, Flex, Container } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export interface StickyButtonProps {
    viewerType: number;
    innerText: string;
    onClick?: () => void;
}

const renderButton = (props: StickyButtonProps) => {
    switch (props.viewerType) {
        case 1:
            return (
                <Button
                    radius="large"
                    variant="soft"
                    size="4"
                    color="orange"
                    onClick={props.onClick}
                >
                    <MagnifyingGlassIcon />
                    {props.innerText}
                </Button>
            );
        case 2:
            return (
                <Button
                    radius="large"
                    variant="soft"
                    size="4"
                    color="blue"
                    onClick={props.onClick}
                >
                    <MagnifyingGlassIcon />
                    {props.innerText}
                </Button>
            );
        default:
            return <></>;
    }
};

const StickyButton: React.FC<StickyButtonProps> = (props) => (
    <Container position="sticky" bottom="10px" minWidth="300px" maxWidth="500px">
        <Flex direction="column" align="stretch" justify="center" pl="3" pr="3">
            {renderButton(props)}
        </Flex>
    </Container>
);

export default StickyButton;
