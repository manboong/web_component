import { Text, IconButton, IconProps} from "@radix-ui/themes"
import { Popover, Flex } from "@radix-ui/themes"

export interface ReviewPopOverProps {
	triggerIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
	popOverString: string;
}


const ReviewPopOver = (props: ReviewPopOverProps) => (
<Flex align="center">
<Popover.Root>
	<Popover.Trigger>
		<IconButton radius="full" size="3" variant="ghost">
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
