import React from 'react';
import { Text, IconButton, IconProps} from "@radix-ui/themes"
import { Popover, Flex } from "@radix-ui/themes"

export interface ReviewPopOverProps {
	triggerIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
	popOverString: string;
	color: "ruby" | "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "jade";
}


const ReviewPopOver = (props: ReviewPopOverProps) => (
<Flex align="center">
<Popover.Root>
	<Popover.Trigger>
		<IconButton radius="full" size="3" variant="ghost" color={props.color}>
			{<props.triggerIcon  width="25" height="25"/>}
		</IconButton>
	</Popover.Trigger>
	<Popover.Content size="2" maxWidth="350px" >
		<Text as="p" trim="both" size="2">
			{props.popOverString}
		</Text>
	</Popover.Content>
</Popover.Root>
</Flex>
);

export default ReviewPopOver;
