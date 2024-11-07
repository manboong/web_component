import { Text, IconButton} from "@radix-ui/themes"
import * as Popover from "@radix-ui/react-popover"

export interface ReviewPopOverProps {
	triggerIcon: JSX.Element;
	popOverString: string;
}


const ReviewPopOver = (props: ReviewPopOverProps) => (
<Popover.Root>
	<Popover.Trigger>
		<IconButton radius="full">
			{props.triggerIcon}
		</IconButton>
	</Popover.Trigger>
	<Popover.Content>
		<Text as="p">
			{props.popOverString}
		</Text>
	</Popover.Content>
</Popover.Root>
);

export default ReviewPopOver;
